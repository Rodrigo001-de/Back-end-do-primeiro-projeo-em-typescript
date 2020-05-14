import { Request, Response } from 'express'
import EmailService from '../services/EmailServices';

const users = [
  { name: 'Rodrigo', email: 'rodrigorael58@gamil.com' },
];

export default {
  async index(request: Request, response: Response) {
    return response.json(users);
  },

  async create(request: Request, response: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name: 'Rodrigo Rael',
        email: 'rodrigorael58@gmail.com' 
      },
      message: {
        subject: 'Bem-vindo ao sistema',
        body: 'Seja bem-vindo' 
      }
    });

    return response.send();
  }
  
};