const alunosDaEscola = [ {
    nome:"Henrique",notas:[],cursos:[],faltas:5},{
    nome:"Edson",notas:[],cursos:[],faltas:2},{
    nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{
    nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{
    nome:"Carlos",notas:[],cursos:[],faltas:0},{
    nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

function adicionarAluno(name){
    alunosDaEscola.push({nome: name, notas: [], cursos: [], faltas: 0})
    return console.log('Aluno inserido com sucesso.')
}

function listarAlunos(){
    let alunos = alunosDaEscola.map(function (nome) {
        return nome['nome']
    })
    return console.log(`Os alunos cadastrados são: ${alunos}.`)
}

function buscarAluno(name) {
    const achou = alunosDaEscola.find(aluno => aluno.nome === name) 
    if (achou == undefined) {
        console.log(`O aluno ${name} NÃO foi encontrado.`)
    } else {
        console.log(`O aluno ${name} foi encontrado.`)
        return console.log(achou) } 
}

function matricularAluno(aluno, nomeDoCurso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
        if (alunosDaEscola.find(name => name.nome === aluno)) {
            alunosDaEscola.cursos = nomeDoCurso
            alunosDaEscola.dataMatricula = new Date
            console.log(`O curso ${nomeDoCurso} foi cadastrado para o aluno ${aluno}.`) 
        }else {
            console.log("Aluno não encontrado.")
        }
    } 

    function aplicarFalta(aluno){
        /*
         Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
        */
       let busca = buscarAluno(aluno.nome);
       if (busca.length == 0){
               console.log("Falta não pôde ser aplicada. Aluno não cadastrado");
           } else {
               alunosDaEscola.map(estudante => {
                   if ((estudante.nome == aluno.nome) && !(estudante.cursos.length == 0)) {
                       estudante.faltas += 1;
                       console.log("Falta aplicada com sucesso!")
                    } 
                })
            }
        
    }

    function aplicarNota(aluno){
        /*
         Ao receber um aluno devidamente cadastrado em nossa lista. 
         Você deverá adicionar uma nota ao aluno na sua lista de notas. 
         Você deverá dar um feedback ao concluir a tarefa. 
         Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
        */
       let busca = buscarAluno(aluno.nome);
       if (busca.length == 0){
               console.log("Nota não pôde ser aplicada. Aluno não cadastrado");
           } else {
               alunosDaEscola.map(estudante => {
                   if ((estudante.nome == aluno.nome) && !(estudante.cursos.length == 0)) {
                       estudante.notas.push(8.5);
                       console.log("Nota aplicada com sucesso!")
                    } 
                })
            }
    }
      
    function aprovarAluno(aluno){
         /* 
         Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não.
         Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
         Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
         */
       let busca = buscarAluno(aluno.nome);
       if (busca.length == 0){
               console.log("Ocorreu um erro! Aluno não cadastrado");
    
            } else {
               
                let estudante = busca[0];
                if ((estudante.cursos.length > 0) && (estudante.notas.length > 0)) {
                    let media = (estudante.notas.reduce( (total, nota) => {total+nota})) / estudante.notas.length;
                    if (estudante.faltas <= 3 && media > 7) {
                        console.log("Este aluno foi Aprovado!")
                        } else {
                            console.log("Este aluno foi Reprovado!")
                        }
                }
             }
    
    }