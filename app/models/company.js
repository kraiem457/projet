import { Schema, model, models } from 'mongoose';

const CompanySchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  accuseD: {
    type: Boolean,
    required: true,
  },
  SARL: {
    type: Number,
    required: true,
  },
  Ap: {
    type: Number,
    required: true,
  },
  StartDate: {
    type: Date,
    required: true,
  },
  EndDate: {
    type: Date,
    required: true,
  },
  NIdentifiant: {
    type: Number,
    required: true,
  },
  NumeroSiret: {
    type: Number,
    required: true,
  },
  codePostal: {
    type: String,
    required: true,
  },
  statusJuridique: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Company = models.Company || model('Company', CompanySchema);

export default Company;
