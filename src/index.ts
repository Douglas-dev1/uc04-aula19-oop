class Tarefa{
  /*O CONTRUTOR INCIALIZA OS PARAMETROS DA CLASSE, QUANDO VC DECLARA UM NOVO OBJETO DEVE PASSAR SEUS PARAMETROS*/
  constructor(nome:string, concluida:boolean, id:number){
    this.nome = nome;
    this.concluida = false;
    this._id = 0;
  }

  /*PARA UM ATRIBUTO OPCIONAL -> VARIAVEL ?: STRING*/
  nome: string;
  concluida: boolean;
  private _id : number;

  public get getNome() : string{
    return this.nome;
  }

  /*PROPRIEDADES PRIVADAs NAO APARECEM QUANDO VC CHAMA O OBJETO.ZZZZ */
  /*ESSAS PROPRIEDADES DEVE INICIAR COM _ UUNDERLINE NA FRENTE*/

  public set setNome(nome : string){
    this.nome = nome;
  }

  public set setEstado(concluida : boolean){
    this.concluida = concluida;
  }

  public set setId(id : number){
    this._id = id ;
  }
}
/*CRIANDO UMA INSTANVIA DA CLASSE, UM OBJETO COM AS CARACTERISTICAS E METODOS DA CLASSE, PASSO O NOME COMO PARÂMETRO*/
const tarefa = new Tarefa("Livro JavaScript", false, 10);

/*QUANDO O ATRIBUTO É PUBLICO PODEMOS MUDAR ASSIM*/
tarefa.nome = "Livro TypeScript";
tarefa.concluida = true;
/*QUANDOO ATIRBUTO É PRIVADO NÃO POSSO ATRIBUIR NADA DIRETAMEWNTE A ELE, POIS ELE NAO APARECE NA LISTA, PORÉM SE HOUVER UM METODO SET QUE MODIFICA
ESSE ATRIBUTO, A LINGUAGEM ENTENDE E DEIXA VISIVEL O METODO PARA SER ALTERADO DE FORMA CONVENCIONAL*/
tarefa.setId = 35;


