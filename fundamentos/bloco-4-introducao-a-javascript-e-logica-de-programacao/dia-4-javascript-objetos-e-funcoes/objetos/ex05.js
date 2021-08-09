let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christimas on Bear Mountain',
  nota: 'Dells Four Color Comics #178, O último MacPatinhas',
  recorrente: 'Sim',
  };

  for(let infos in info) {
    console.log(info[infos]) + ""
  }
  for(let infos2 in info2) {
    console.log(info2[infos2]);
  }

