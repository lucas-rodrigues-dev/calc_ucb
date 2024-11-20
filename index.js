function calculo() {
    const media = 7;
    const name = prompt("Olá, primeiro digite seu nome");
    
    // Converte as entradas para números
    const testN1 = parseFloat(prompt("Olá " + name + ", agora digite o resultado da soma das notas de N1 (provas e atividades)"));
    const testN2 = parseFloat(prompt("Agora, o resultado da soma das notas de N2 (provas e atividades)"));
    const PPD = parseFloat(prompt("Digite sua nota do PPD"));
    
    // Calcula a soma das notas
    const calc = testN1 + testN2 + PPD;

    // Verifica se atingiu a média
    if (calc >= media) {
        alert(name + ", a sua nota aproximada é " + Math.round(calc) + ", ou seja, pelos cálculos você atingiu a média para passar!");
    } else {
        alert(name + ", a sua nota aproximada é " + Math.round(calc) + ", ou seja, pelos cálculos você não atingiu a média para passar.");
    }
}
calculo();
