function list(names) {
  let result = " ";
  
  if((names.length == 1)){
    result = `${names[0].name}`  
  }else if ((names.length == 2)) {
    result = `${names[0].name} & ${names[1].name}`;
  } else if (names.length >2) {
    result = `${names[0].name},`
    for (let i = 1; i < names.length - 2; i++) {
      result += ` ${names[i].name},`;
    }
    for (let i = names.length - 2; i < names.length - 1; i++) {
      result += ` ${names[i].name} &`;
    }
    for (let i = names.length - 1; i < names.length; i++) {
      result += ` ${names[i].name}`;
    }
}

  return result;
};


list([{name: 'Bart'}])
