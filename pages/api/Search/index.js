import mongoose from  'mongoose'
import Company  from  '../../../app/models/company'

export default async function handler(req , res) {

     const db =  'mongodb://localhost:27017/lina'
     mongoose
         .connect(db, { 
             useNewUrlParser: true,
           })
         .then(() => console.log('MongoDB connected...'))
         .catch(err => console.log(err));
           const  { keywords } = req.body;
            try  {
        
              const  [keyword1, keyword2, keyword3] = keywords.split(' ');

              // Recherchez les éléments dans la base de données en utilisant Mongoose
              const result = await Company.find({

                $or: [
                  { country: { $regex: new RegExp(keyword1, 'i') } },
                  { companyName: { $regex: new RegExp(keyword2, 'i') } },
                  {locality: { $regex: new RegExp(keyword3, 'i') }},
                ],

                 // Effectuez une recherche insensible à la casse
              });
        console.log(result);
              return res.status(200).json(result);
            } catch (error) {
              console.error('Une erreur s\'est produite lors de la recherche:', error);
              res.status(500).json({ error: 'Une erreur s\'est produite lors de la recherche' });
            }
        


          }
 