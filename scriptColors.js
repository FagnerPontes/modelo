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
var backColor6 = '';
var backColor1t = '';
var backColor1t = '';
var backColor2s = '';
var buttonColor1 = '';
var buttonColor2 = '';
var buttonColor3 = '';
var fontColor1 = '';
var fontColor2 = '';
var fontColor3 = '';
var aColor = '';
var border1 = '';
var border2 = '';
var border3 = '';
var backgroundImage = "";

// |- dark()
var dark = () => {
  backColor1 = '#01040990';
  backColor2 = '#0d1117d0';
  backColor3 = '#161b22';
  backColor4 = '#21262d';
  backColor6 = '#010409';
  backColor1t = '#01040900';
  backColor2t = '#0d111700';
  backColor2s = '#0d1117';
  buttonColor1 = '#05090d';
  buttonColor2 = '#313439';
  buttonColor3 = '#818489';
  fontColor1 = '#f1f4ff';
  fontColor2 = '#ffffff';
  fontColor3 = '#010409';
  aColor = '#aa99ff';
  border1 = '1px solid #41464d00';
  border2 = '1px solid #717479';
  border3 = '1px solid #616469';
  backgroundImage = "url('Imagens/Arvore_Original.jpg')";
  return 'dark';
}

// |- light()
var light = () => {
  backColor1 = '#eef1f690';
  backColor2 = '#dee2e8d0';
  backColor3 = '#d1d6dd';
  backColor4 = '#c6cbd2';
  backColor6 = '#eef1f6';
  backColor1t = '#eef1f600';
  backColor2t = '#dee2e800';
  backColor2s = '#dee2e8';
  buttonColor1 = '#eaeeef';
  buttonColor2 = '#bec1c6';
  buttonColor3 = '#6e7176';
  fontColor1 = '#000016';
  fontColor2 = '#000000';
  fontColor3 = '#eef1f6';
  aColor = '#2211ff';
  border1 = '1px solid #dee2e800';
  border2 = '1px solid #7E8186';
  border3 = '1px solid #6e6176';
  backgroundImage = "url('Imagens/Arvore_Original.jpg')";
  return 'light';
}

// |- solidDark()
var solidDark = () => {
  backColor1 = '#010409';
  backColor2 = '#0d1117';
  backColor3 = '#161b22';
  backColor4 = '#21262d';
  backColor6 = '#010409';
  backColor1t = '#010409';
  backColor2t = '#0d1117';
  backColor2s = '#0d1117';
  buttonColor1 = '#05090d';
  buttonColor2 = '#313439';
  buttonColor3 = '#818489';
  fontColor1 = '#f1f4ff';
  fontColor2 = '#ffffff';
  fontColor3 = '#010409';
  aColor = '#aa99ff';
  border1 = '1px solid #0d1117';
  border2 = '1px solid #717479';
  border3 = '1px solid #616469';
  backgroundImage = "url('Imagens/Arvore_Original.jpg')";
  return 'solid_dark';
}

// |- solidLight
var solidLight = () => {
  backColor1 = '#eef1f6';
  backColor2 = '#dee2e8';
  backColor3 = '#d1d6dd';
  backColor4 = '#c6cbd2';
  backColor6 = '#eef1f6';
  backColor1t = '#eef1f6';
  backColor2t = '#dee2e8';
  backColor2s = '#dee2e8';
  buttonColor1 = '#eaeeef';
  buttonColor2 = '#bec1c6';
  buttonColor3 = '#6e7176';
  fontColor1 = '#000016';
  fontColor2 = '#000000';
  fontColor3 = '#eef1f6';
  aColor = '#2211ff';
  border1 = '1px solid #dee2e8';
  border2 = '1px solid #7E8186';
  border3 = '1px solid #6e6176';
  backgroundImage = "url('Imagens/Arvore_Original.jpg')";
  return 'solid_light';
}