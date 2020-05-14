interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

// DTO: Data Transfer Object, É um conceito muito utilizado dentro 
// da metodologia DDD, que é basicamente um objeto para transferencia
// de dados, quando for criar uma interface para definir como os dados
// trafêgam entre 2 arquivos  diferentes dentro da aplicação  

class EmailService implements IEmailService {
  sendMail({to, message}: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;