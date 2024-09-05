// Editar scriptString.js
//Textos (nomes) dos boões dentro do container
const texto_pHeader = '';

const buttonsName = [
 'Nossos serviços',
 'Nossos Planos',
 'Seja um parceiro',
 'Entre em contato',
 'Configurações',
]

//Textos dentro do segundo container
//Título do painel inicial (home):
const titulo_Home = 'Apresentação:';

//Textos das apresentação das ODSs nos paineis referentes a cada botão do menu.
const texto_Home = `
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_Panel_1 = `
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_Panel_2 = `
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_Panel_3 = `
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_Panel_4 = `
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;
const texto_Panel_5 = `
Digite aqui o texto que voçê deseja colocar na apresentação deste painel!
`;

//Array com todos os textos das ODSs
var meusTextos = [
 texto_Panel_1,
 texto_Panel_2,
 texto_Panel_3,
 texto_Panel_4,
 texto_Panel_5,
 texto_Home
]

// Entidades para enviar a mensagem
const entidade1 = 'ONU Brasil';
const entidade2 = 'Semas - PE, Secretaria de Meio Ambiente e Sustentabilidade de Pernambuco';
const entidade3 = 'SES - PE, Secretaria Estadual de Saúde de Pernambuco';
const entidade4 = 'ANVISA, Agência Nacional de Vigilância Sanitári';
const entidade5 = 'SDS - PE, Secretaria de Defesa Solcia de Pernambuco';
const entidade6 = 'Ibama, Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais';
const entidade7 = 'SJDH, Secretaria de Justiça e Direitos Humanos';
const entidade8 = 'MPPE, Ministério Público de Pernambuco';
const entidade9 = 'MPT - PE, Ministério Público do Trabalho em Pernambuco';
const entidade10 = 'SEDEPE, Secretaria de Desenvolvimento Proficional e Empreendedorismo';
const entidade11 = 'SEE - PE, Secretaria de Educação e Espostes de Pernambuco';
const entidade12 = 'SCJ - PE Secretaria da Criança e da Juventude de Pernambuco';
const entidade13 = 'SDE - PE, Secretaria de Desenvolvimento Econômico de Pernambuco';
const entidade14 = 'Neoenergia - PE';

/*Arrays das entidades para selecionar nos checkbox de cada painel*/
const entidades_ErradicacaoDaPobreza = [entidade1, entidade2, entidade5];
const entidades_FomeZero_AgriculturaSustentavel = [entidade1, entidade2, entidade7, entidade8, entidade13];
const entidades_Saude_BemEstar = [entidade1, entidade3, entidade4, entidade8, entidade12];
const entidades_EducacaoDeQualidade = [entidade1, entidade7, entidade8, entidade10, entidade11, entidade12];
const entidades_IgualdadeDeGenero = [entidade1, entidade5, entidade7, entidade8, entidade9, entidade12];
const entidades_AguaPotavel_Saneamento = [entidade1, entidade2, entidade4, entidade6];
const entidades_EnergiaLimpaAcessivel = [entidade1, entidade2, entidade6, entidade13, entidade14];
const entidades_TrabalhoDescente_CrescimentoEconomico = [entidade1, entidade2, entidade9, entidade10, entidade13];
const entidades_Industria_Inovacao_Infraestrutura = [entidade1, entidade2, entidade10, entidade13];
const entidades_ReducaoDasDesigualdades = [entidade1, entidade7, entidade10, entidade11, entidade12, entidade13];
const entidades_CidadesComunidadesSustentaveis = [entidade1, entidade2, entidade13];
const entidades_ConsumoProducaoResponsavel = [entidade1, entidade2, entidade13];
const entidades_AcaoContraMudancaGlobalDoClima = [entidade1, entidade2, entidade6];
const entidades_VidaNaAgua = [entidade1, entidade2, entidade6];
const entidades_VidaTerrestre = [entidade1, entidade2, entidade6];
const entidades_PazJustica_InstituicoesEficazes = [entidade1, entidade5, entidade7, entidade8, entidade9];
const entidades_Parcerias_MeiosDeImplementacao = [entidade1, entidade2, entidade3, entidade4, entidade5, entidade6, entidade7, entidade8, entidade9, entidade10, entidade11, entidade12, entidade13, entidade14];

var entidades = [
 entidades_ErradicacaoDaPobreza,
 entidades_FomeZero_AgriculturaSustentavel,
 entidades_Saude_BemEstar,
 entidades_EducacaoDeQualidade,
 entidades_IgualdadeDeGenero,
 entidades_AguaPotavel_Saneamento,
 entidades_EnergiaLimpaAcessivel,
 entidades_TrabalhoDescente_CrescimentoEconomico,
 entidades_Industria_Inovacao_Infraestrutura,
 entidades_ReducaoDasDesigualdades,
 entidades_CidadesComunidadesSustentaveis,
 entidades_ConsumoProducaoResponsavel,
 entidades_AcaoContraMudancaGlobalDoClima,
 entidades_VidaNaAgua,
 entidades_VidaTerrestre,
 entidades_PazJustica_InstituicoesEficazes,
 entidades_Parcerias_MeiosDeImplementacao,
]

const tituloChildLeft = 'Para quem você quer enviar a mensagem?';
const tituloChildRight = 'Relate aqui o problema';

//Textos dentro do terceiro container
const tituloDivRight = 'Publicidade'

const Informacoes = `Área destinada à publicidade!`

//Textos de alerta:
const atencao1 = `
ATENÇÃO!
Selecione ao menos uma entidade!
`

const atencao2 = `
ATENÇÃO!
A mensagem está vazia, digite sua mensagem.
`