import mongoose from 'mongoose';
import Company from '../../../app/models/company';
import data1 from '../../allcompanies';

const DB_URL = 'mongodb://localhost:27017/lina';

export default async function handler(req, res) {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Company.deleteMany({});

    const insertedCompanies = await Company.insertMany(data1);

    console.log(`${insertedCompanies.length} sociétés insérées avec succès.`);

    await mongoose.connection.close();

    const successMessage = `${insertedCompanies.length} sociétés insérées avec succès.`;
    res.status(200).json({ message: successMessage });
  } catch (error) {
    console.error('Une erreur s\'est produite lors de l\'insertion des sociétés :', error);
    const errorMessage = 'Une erreur s\'est produite lors de l\'insertion des sociétés.';
    res.status(500).json({ message: errorMessage });
  }
}
