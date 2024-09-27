// Editar scriptColors.js

// |- var nyThemes
var myThemes = [
  'dark',
  'light',
  'solid_dark',
  'solid_light'
];

// |- Variáveis temáticas
var backColor1 = '';
var backColor2 = '';
var backColor3 = '';
var backColor4 = '';
var backColor1t = '';
var backColor1t = '';
var backColor1s = '';
var backColor2s = '';
var buttonColor1 = '';
var buttonColor2 = '';
var buttonColor3 = '';
var fontColor1 = '';
var fontColor2 = '';
var fontColor3 = '';
var fontColor4 = '';
var fontColor5 = '';
var aColor = '';
var backgroundImage = "";
var backgroundImage2 = "";
var backgroundImage3 = "";

// |- dark()
var dark = () => {
  backColor1 = '#01040990';
  backColor2 = '#0d1117d0';
  backColor3 = '#161b22';
  backColor4 = '#21262d';
  backColor1s = '#010409';
  backColor1t = '#01040900';
  backColor2t = '#0d111700';
  backColor2s = '#0d1117';
  buttonColor1 = '#05090d';
  buttonColor2 = '#313439';
  buttonColor3 = '#818489';
  fontColor1 = '#cff4fc';
  fontColor2 = '#9eeaf9';
  fontColor3 = '#6edff6';
  fontColor4 = '#3dd5f3';
  fontColor5 = '#032830';
  aColor = '#aa99ff';
  backgroundImage = "url('Imagens/Arvore_Original.jpg')";
  backgroundImage2 = "url('Imagens/mulher.jpg')";
  backgroundImage3 = "url('Imagens/mosaico.jpg')";
  return 'dark';
}

// |- light()
var light = () => {
  backColor1 = '#eef1f690';
  backColor2 = '#dee2e8d0';
  backColor3 = '#d1d6dd';
  backColor4 = '#c6cbd2';
  backColor1t = '#eef1f600';
  backColor2t = '#dee2e800';
  backColor1s = '#eef1f6';
  backColor2s = '#dee2e8';
  buttonColor1 = '#eaeeef';
  buttonColor2 = '#bec1c6';
  buttonColor3 = '#6e7176';
  fontColor1 = '#001520';
  fontColor2 = '#004550';
  fontColor3 = '#007580';
  fontColor4 = '#00a5b0';
  fontColor5 = '#70f0f5';
  aColor = '#2211ff';
  backgroundImage = "url('Imagens/Arvore_Original.jpg')";
  backgroundImage2 = "url('Imagens/mulher.jpg')";
  backgroundImage3 = "url('Imagens/mosaico.jpg')";
  return 'light';
}

// |- solidDark()
var solidDark = () => {
  backColor1 = '#010409';
  backColor2 = '#0d1117';
  backColor3 = '#161b22';
  backColor4 = '#21262d';
  backColor1t = '#010409';
  backColor2t = '#0d1117';
  backColor1s = '#010409';
  backColor2s = '#0d1117';
  buttonColor1 = '#05090d';
  buttonColor2 = '#313439';
  buttonColor3 = '#818489';
  fontColor1 = '#10faff';
  fontColor2 = '#10cacf';
  fontColor3 = '#109a9f';
  fontColor4 = '#106a6f';
  fontColor5 = '#032830';
  aColor = '#aa99ff';
  backgroundImage = "url('Imagens/Arvore_Original.jpg')";
  backgroundImage2 = "url('Imagens/mulher.jpg')";
  backgroundImage3 = "url('Imagens/mosaico.jpg')";
  return 'solid_dark';
}

// |- solidLight
var solidLight = () => {
  backColor1 = '#eef1f6';
  backColor2 = '#dee2e8';
  backColor3 = '#d1d6dd';
  backColor4 = '#c6cbd2';
  backColor1t = '#eef1f6';
  backColor2t = '#dee2e8';
  backColor1s = '#eef1f6';
  backColor2s = '#dee2e8';
  buttonColor1 = '#eaeeef';
  buttonColor2 = '#bec1c6';
  buttonColor3 = '#6e7176';
  fontColor1 = '#032830';
  fontColor2 = '#055160';
  fontColor3 = '#087990';
  fontColor4 = '#0aa2c0';
  fontColor5 = '#6edff6';
  aColor = '#2211ff';
  backgroundImage = "url('Imagens/Arvore_Original.jpg')";
  backgroundImage2 = "url('Imagens/mulher.jpg')";
  backgroundImage3 = "url('Imagens/mosaico.jpg')";
  return 'solid_light';
}