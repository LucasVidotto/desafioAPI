
function validarCpf(cpf) {
    // Remove qualquer caractere não numérico
    const cpfLimpo = cpf.replace(/\D/g, '');
  
    // Verifica se tem exatamente 11 dígitos
    if (cpfLimpo.length !== 11) {
      return false;
    }
  
    return true;
  }
  
  module.exports = validarCpf;