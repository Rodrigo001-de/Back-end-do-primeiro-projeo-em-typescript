"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// DTO: Data Transfer Object, É um conceito muito utilizado dentro 
// da metodologia DDD, que é basicamente um objeto para transferencia
// de dados, quando for criar uma interface para definir como os dados
// trafêgam entre 2 arquivos  diferentes dentro da aplicação  
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendMail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("Email enviado para " + to.name + ": " + message.subject);
    };
    return EmailService;
}());
exports.default = EmailService;
