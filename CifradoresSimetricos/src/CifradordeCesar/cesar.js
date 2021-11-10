var cesar = function (File, deslocamento, option) {
  const aceitos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const tam = 128
  let resultado = ''
  txt = File
  if (option === 'c') {
    txt = txt.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    for (let letra of txt) {
      if (aceitos.includes(letra)) {
        let carac = 0
        carac = letra.charCodeAt(0)
        let caracLetraDec = (carac + deslocamento)
        let LetraDec = String.fromCharCode(caracLetraDec)
        resultado = resultado.concat(LetraDec)
      } else {
        resultado = resultado.concat(letra)
      }
    }
  } else if (option === 'd') {
    for (let letra of txt) {
      let x = String.fromCharCode((letra.charCodeAt(0) - deslocamento) % tam)
      if (aceitos.includes(x)) {
        let carac = 0
        carac = letra.charCodeAt(0)
        let caracLetraDec = (carac - deslocamento) % tam
        let LetraDec = String.fromCharCode(caracLetraDec)
        resultado = resultado.concat(LetraDec)
      } else {
        resultado = resultado.concat(letra)
      }
    }
  } else {
    throw new Error("Inválido " + option)
  }
  return resultado;
};

var DecifradorCesarVernam = function (File, deslocamento, option) {
  const aceitos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const tam = 128
  let resultado = ''
  txt = File
  if (option === 'c') {
    txt = txt.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    for (let letra of txt) {
      if (aceitos.includes(letra)) {
        let carac = 0
        carac = letra.charCodeAt(0)
        let caracLetraDec = (carac + deslocamento)
        let LetraDec = String.fromCharCode(caracLetraDec)
        resultado = resultado.concat(LetraDec)
      } else {
        resultado = resultado.concat(letra)
      }
    }
  } else if (option === 'd') {
    for (let letra of txt) {
      let x = String.fromCharCode((letra.charCodeAt(0) - deslocamento) % tam)
      if (aceitos.includes(x)) {
        let carac = 0
        carac = letra.charCodeAt(0)
        let caracLetraDec = (carac - deslocamento) % tam
        let LetraDec = String.fromCharCode(caracLetraDec)
        resultado = resultado.concat(LetraDec)
      } else {
        resultado = resultado.concat(letra)
      }
    }
  } else {
    throw new Error("Inválido " + option)
  }
  return resultado + "\n" + "Chave decifrada: " + deslocamento;
};


module.exports = {
  cesar,
  DecifradorCesarVernam

};