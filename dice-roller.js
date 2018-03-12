var numberOfRolls = process.argv.slice(2)

for (i=1;i<=numberOfRolls[0];i++) {
  number = Math.floor(Math.random()*(5+1)+1);
  console.log(number);
}
