import mongoose from 'mongoose';
import Company from '../../../app/models/company';

export  default async function handler(req, res) {
    const  db  = 'mongodb://localhost:27017/lina'
    mongoose
        .connect(db, { 
            useNewUrlParser: true,
          })
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err));


  try {
    // Vérifiez que la méthode HTTP est bien GET
    if (req.method !== 'GET') {
      res.status(405).json({ error: 'Méthode non autorisée.' });
      return;
    }

    // Récupérez toutes les données de la collection "companies" (ou la collection que vous utilisez)
    const data = await Company.find();
console.log(data);
    // Renvoyez les données en tant que réponse JSON
    res.status(200).json(data);

  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des données.' });
  }
}

