/* =========================================================
   CONTEÚDO DO SITE — Mentoria Educacional Promover (8º Ano)
   Para editar questões, mexa aqui. c = índice da correta (0=A,1=B,2=C,3=D)
   ========================================================= */
const CONFIG = { serie: '8º', serieLonga: '8º Ano', lsKey: 'promover_8ano_v1' };
const FR = (a, b) => `<span class="frac"><span>${a}</span><span>${b}</span></span>`;

const MODULOS = {
  m1: {
    id: 'm1',
    titulo: 'Matemática 1',
    sub: 'Contagem (PFC), Probabilidade e Estatística',
    emoji: '🎲',
    topicos: ['Princípio Fundamental da Contagem', 'Possibilidades e probabilidade', 'Estatística: média, moda, mediana e amplitude'],
    questoes: [
      { t: 0, txt: 'Para montar um combo, uma lanchonete oferece <b>4 sanduíches</b>, <b>3 bebidas</b> e <b>3 sobremesas</b>. O cliente escolhe exatamente um item de cada categoria, mas <b>não pode</b> combinar o sanduíche picante com o suco cítrico (essa combinação está indisponível). Quantos combos distintos ele pode formar?',
        ops: ['36 combos.', '35 combos.', '33 combos.', '10 combos.'], c: 2,
        dica: 'Calcule todos (4 × 3 × 3) e tire os proibidos. A dupla picante + cítrico pode vir com quantas sobremesas?',
        exp: 'Sem restrição: 4 × 3 × 3 = 36 combos. A dupla proibida (picante + cítrico) aparece com <b>cada uma das 3 sobremesas</b>, então tiramos 3 combos: 36 − 3 = <b>33 combos</b>.' },
      { t: 0, fig: 'estradas', txt: 'O diagrama mostra as estradas que ligam as cidades A, B e C. Um viajante vai de <b>A até C passando por B</b>, e depois volta de <b>C até A passando por B</b>, <b>sem repetir nenhuma estrada usada na ida</b>. De quantas maneiras diferentes ele pode fazer a viagem completa?',
        ops: ['12 maneiras.', '18 maneiras.', '24 maneiras.', '36 maneiras.'], c: 0,
        dica: 'Ida: (A→B) × (B→C). Na volta, cada trecho perde 1 estrada, a que já foi usada.',
        exp: 'Ida: 3 estradas de A→B e 2 de B→C → 3 × 2 = 6. Volta sem repetir: de C→B sobra <b>1</b> estrada e de B→A sobram <b>2</b> → 1 × 2 = 2. Total: 6 × 2 = <b>12 maneiras</b>.' },
      { t: 0, txt: 'Um cadeado digital usa uma senha de <b>4 algarismos</b> escolhidos entre {0, 1, 2, …, 9}. O sistema exige que o <b>primeiro algarismo seja diferente de zero</b> e que <b>não haja algarismos repetidos</b>. Quantas senhas válidas podem ser cadastradas?',
        ops: ['4.536 senhas.', '5.040 senhas.', '9.000 senhas.', '10.000 senhas.'], c: 0,
        dica: 'Comece pela casa com restrição (a 1ª). Depois, o zero volta a valer, mas sem repetir.',
        exp: '1º dígito (≠ 0): 9 opções. 2º dígito: agora o zero pode, mas não o já usado → 9 opções. 3º: 8 opções. 4º: 7 opções. Total: 9 × 9 × 8 × 7 = <b>4.536 senhas</b>.' },
      { t: 0, txt: 'Usando apenas os algarismos {1, 2, 3, 4, 5, 6}, quantos números naturais <b>ímpares</b> de <b>três algarismos distintos</b> podem ser escritos?',
        ops: ['40 números.', '60 números.', '108 números.', '120 números.'], c: 1,
        dica: 'Ímpar depende da unidade. Comece por ela: quais algarismos ímpares existem no conjunto?',
        exp: 'Unidade ímpar: {1, 3, 5} → 3 opções. Sem repetir, sobram 5 opções para a centena e 4 para a dezena. Total: 5 × 4 × 3 = <b>60 números</b>.' },
      { t: 0, txt: 'Numa competição com <b>8 finalistas</b>, serão entregues medalhas de <b>Ouro</b>, <b>Prata</b> e <b>Bronze</b>. Ninguém pode ganhar mais de uma medalha. De quantas maneiras o pódio pode ser formado?',
        ops: ['24 maneiras.', '56 maneiras.', '336 maneiras.', '512 maneiras.'], c: 2,
        dica: 'Quem ganhou o ouro não pode ganhar a prata. A cada medalha, sobra uma pessoa a menos.',
        exp: 'Ouro: 8 opções; Prata: 7; Bronze: 6. Total: 8 × 7 × 6 = <b>336 maneiras</b>. (512 = 8 × 8 × 8 seria com repetição, o que não pode.)' },
      { t: 1, fig: 'grade36', txt: 'Ao lançar <b>dois dados comuns</b> (um branco e um azul) e somar os pontos, qual é a <b>probabilidade</b> de a soma ser igual a <b>8</b>?',
        ops: [FR(1, 9), FR(5, 36), FR(1, 6), FR(7, 36)], c: 1,
        dica: 'São 6 × 6 = 36 resultados. Conte os pares que somam 8 — (2,6) e (6,2) são diferentes!',
        exp: `Espaço amostral: 6 × 6 = 36 pares. Soma 8: (2,6), (3,5), (4,4), (5,3), (6,2) → 5 casos. P = <b>${FR(5, 36)}</b>.` },
      { t: 1, txt: 'Uma caixa tem <b>6 bolas azuis</b>, <b>9 verdes</b> e <b>5 amarelas</b>. Retirando uma bola ao acaso, qual é a probabilidade de ela <b>NÃO ser verde</b>?',
        ops: ['45%.', '50%.', '55%.', '75%.'], c: 2,
        dica: 'Total de bolas? Quantas não são verdes? Ou use P(não E) = 1 − P(E).',
        exp: `Total: 6 + 9 + 5 = 20. Não verdes: 6 + 5 = 11. P = ${FR(11, 20)} = 0,55 = <b>55%</b>. (Ou: P(verde) = 45%, então 100% − 45% = 55%.)` },
      { t: 1, txt: 'Um cofre tem um código formado por <b>uma vogal</b> (A, E, I, O, U) seguida de <b>dois algarismos distintos</b> escolhidos entre {1, 2, 3, 4}. Se alguém tentar um código válido ao acaso, qual é a probabilidade de acertar na <b>primeira tentativa</b>?',
        ops: [FR(1, 20), FR(1, 40), FR(1, 60), FR(1, 80)], c: 2,
        dica: 'Primeiro conte todos os códigos com o PFC. Só 1 deles abre o cofre.',
        exp: `Total de códigos: 5 vogais × 4 × 3 = 60. Só 1 abre o cofre → P = <b>${FR(1, 60)}</b>.` },
      { t: 1, fig: 'tab9', txt: 'A tabela mostra os alunos do 8º ano que participam de projetos extracurriculares. Sorteando um aluno ao acaso entre <b>todos</b> os inscritos, qual é a probabilidade de ele estudar à <b>Tarde</b> <u>e</u> participar de <b>Xadrez</b>?',
        ops: [FR(1, 6), FR(1, 3), FR(1, 2), FR(2, 3)], c: 1,
        dica: 'Casos favoráveis = a célula onde Tarde cruza com Xadrez. Total = o total geral.',
        exp: `Célula Tarde × Xadrez = 16 alunos. Total geral = 48. P = ${FR(16, 48)} = <b>${FR(1, 3)}</b>.` },
      { t: 2, txt: 'Nas três primeiras avaliações, Lucas tirou <b>6,5</b>, <b>7,5</b> e <b>8,0</b>. Para que a <b>média aritmética simples</b> das quatro avaliações seja exatamente <b>8,0</b>, que nota ele precisa tirar na quarta?',
        ops: ['8,5.', '9,0.', '9,5.', '10,0.'], c: 3,
        dica: 'Média 8 em 4 provas significa que a soma das 4 notas tem que ser 4 × 8.',
        exp: 'Soma necessária: 4 × 8,0 = 32,0. Já tem: 6,5 + 7,5 + 8,0 = 22,0. Falta: 32,0 − 22,0 = <b>10,0</b>.' },
      { t: 2, txt: 'Num processo seletivo, a nota final é a <b>média ponderada</b> de três provas: Objetiva (peso 2), Redação (peso 3) e Entrevista (peso 5). Um candidato tirou <b>7,0</b>, <b>8,0</b> e <b>9,0</b>, respectivamente. Sua média final foi:',
        ops: ['8,0.', '8,3.', '8,5.', '8,8.'], c: 1,
        dica: 'Multiplique cada nota pelo peso, some tudo e divida pela soma dos pesos (2 + 3 + 5).',
        exp: `${FR('7 · 2 + 8 · 3 + 9 · 5', '2 + 3 + 5')} = ${FR('14 + 24 + 45', 10)} = ${FR(83, 10)} = <b>8,3</b>.` },
      { t: 2, txt: 'As temperaturas máximas de uma cidade em oito dias seguidos (em °C) foram: <b>29, 26, 31, 27, 30, 26, 32, 28</b>. Organizando em rol, a <b>mediana</b> e a <b>amplitude</b> valem, respectivamente:',
        ops: ['28,5 °C e 6 °C.', '28,0 °C e 6 °C.', '29,0 °C e 5 °C.', '28,5 °C e 5 °C.'], c: 0,
        dica: 'Coloque em ordem crescente. Com 8 valores (par), a mediana é a média dos dois do meio.',
        exp: `Rol: 26, 26, 27, <b>28, 29</b>, 30, 31, 32. Mediana = ${FR('28 + 29', 2)} = <b>28,5 °C</b>. Amplitude = 32 − 26 = <b>6 °C</b>.` },
      { t: 2, fig: 'col13', txt: 'O gráfico mostra a quantidade de livros lidos no trimestre por <b>20 estudantes</b>. A <b>moda</b> e a <b>média</b> de livros lidos por estudante são, respectivamente:',
        ops: ['3 livros e 2,55 livros.', '8 livros e 2,50 livros.', '3 livros e 2,50 livros.', '2 livros e 2,75 livros.'], c: 0,
        dica: 'Cuidado: a moda é o número de LIVROS mais frequente, não a altura da coluna (8). Para a média, multiplique livros × alunos.',
        exp: `Coluna mais alta: 8 alunos leram <b>3 livros</b> → Moda = 3 livros. Média = ${FR('1·3 + 2·6 + 3·8 + 4·3', 20)} = ${FR(51, 20)} = <b>2,55 livros</b>.` },
      { t: 2, txt: 'Num time de basquete com <b>5 jogadores</b>, a média das alturas é <b>1,92 m</b>. O jogador mais baixo, de <b>1,80 m</b>, é trocado por um atleta de <b>2,00 m</b>. Qual passa a ser a nova média?',
        ops: ['1,94 m.', '1,96 m.', '1,98 m.', '2,00 m.'], c: 1,
        dica: 'Ache a soma das alturas (5 × 1,92). Quanto a soma aumenta com a troca?',
        exp: `Soma inicial: 5 × 1,92 = 9,60 m. A troca aumenta a soma em 2,00 − 1,80 = 0,20 m → 9,80 m. Nova média: ${FR('9,80', 5)} = <b>1,96 m</b>.` },
      { t: 2, txt: 'Um conjunto de <b>cinco números inteiros</b> tem <b>moda 10</b>, <b>mediana 12</b> e <b>média 13</b>. O maior elemento é <b>19</b>. Qual é o <b>quarto elemento</b> quando o conjunto está em ordem crescente?',
        ops: ['13.', '14.', '15.', '16.'], c: 1,
        dica: 'Escreva _ _ 12 _ 19. A moda 10 precisa aparecer pelo menos 2 vezes. A soma dos 5 é 5 × 13.',
        exp: 'Em ordem: a ≤ b ≤ c ≤ d ≤ e. Mediana → c = 12. Moda 10 (menor que 12) → a = b = 10. e = 19. Soma = 5 × 13 = 65. Então 10 + 10 + 12 + d + 19 = 65 → 51 + d = 65 → <b>d = 14</b>.' }
    ]
  }
};

/* ---------------- TEORIA ---------------- */
const TEORIA = {
  m1: [
    () => `
      <p class="lead">Quando uma escolha acontece em <b>etapas</b> (1ª etapa com n₁ jeitos, 2ª com n₂ jeitos…), o total de possibilidades é a <b>multiplicação</b> das opções de cada etapa.</p>
      <div class="formula big">Total = n₁ · n₂ · n₃ · … · nₖ</div>
      <div data-w="arvore"></div>
      <h4>Com repetição × Sem repetição</h4>
      <div class="duo">
        <div class="box ql"><b>🔁 Com repetição</b>${slots([['10', ''], ['10', ''], ['10', '']])}<p>Os elementos podem ser usados de novo. Ex.: senha de 3 algarismos que podem repetir: 10 · 10 · 10 = <b>1.000</b>.</p></div>
        <div class="box qt"><b>🚫 Sem repetição</b>${slots([['10', ''], ['9', ''], ['8', '']])}<p>A cada escolha, <b>desconta 1</b> opção. Ex.: 10 · 9 · 8 = <b>720</b>.</p></div>
      </div>
      <div class="alerta">🎯 <b>Regra das restrições:</b> sempre comece pela casa que tem exigência (ser par, ser ímpar, não começar com zero…).</div>
      <div data-w="senha"></div>
      ${exemplo('Exemplo 1', 'Quantos números <b>pares</b> de 3 algarismos <b>distintos</b> podemos formar com {1, 2, 3, 4, 5}?',
        `Comece pela unidade: para ser par, só {2, 4} → 2 opções. Sobram 4 para a centena e 3 para a dezena.${slots([['4', 'centena'], ['3', 'dezena'], ['2', 'unidade (par)', 1]])}4 × 3 × 2 = <b>24 números</b>.`)}`,
    () => `
      <div class="duo">
        <div class="box"><b>🌌 Espaço amostral (Ω)</b><p>Todos os resultados possíveis. No dado: Ω = {1, 2, 3, 4, 5, 6} → <b>n(Ω) = 6</b>.</p><div class="faces">${[1, 2, 3, 4, 5, 6].map(n => dado(n, 38)).join('')}</div></div>
        <div class="box"><b>🎯 Evento (E)</b><p>Os resultados que queremos. "Sair número primo": E = {2, 3, 5} → <b>n(E) = 3</b>.</p><div class="faces">${[1, 2, 3, 4, 5, 6].map(n => dado(n, 38, [2, 3, 5].includes(n))).join('')}</div></div>
      </div>
      <div class="formula big">P(E) = ${FR('casos favoráveis', 'casos possíveis')} = ${FR('n(E)', 'n(Ω)')}</div>
      <p class="center">No exemplo: P(primo) = ${FR(3, 6)} = ${FR(1, 2)} = 0,5 = 50%. A probabilidade vai de <b>0 (impossível)</b> a <b>1 (certo)</b>, ou de 0% a 100%.</p>
      <div class="regua"><span style="left:0">0<br><small>impossível</small></span><span style="left:50%">½<br><small>50%</small></span><span style="left:100%">1<br><small>certo</small></span><i style="left:50%"></i></div>
      <div class="alerta">🔄 <b>Evento complementar:</b> P(não E) = 1 − P(E). Se a chance de chover é 30%, a de não chover é 70%.</div>
      <div data-w="dados"></div>
      ${exemplo('Exemplo 2a', 'Uma urna tem 15 fichas numeradas de 1 a 15. Qual a probabilidade de sortear um <b>múltiplo de 4</b>?',
        `<span class="fichas">${Array.from({ length: 15 }, (_, i) => `<i class="${(i + 1) % 4 === 0 ? 'on' : ''}">${i + 1}</i>`).join('')}</span>Múltiplos de 4: {4, 8, 12} → 3 casos em 15. P = ${FR(3, 15)} = ${FR(1, 5)} = <b>20%</b>.`)}`,
    () => `
      <div class="duo">
        <div class="box"><b>➗ Média simples (x̄)</b><div class="formula">x̄ = ${FR('soma dos valores', 'quantidade de valores')}</div></div>
        <div class="box"><b>⚖️ Média ponderada</b><div class="formula">x̄ₚ = ${FR('x₁·p₁ + x₂·p₂ + …', 'p₁ + p₂ + …')}</div><p>Cada valor tem um <b>peso</b> (importância).</p></div>
        <div class="box ql"><b>👑 Moda (Mo)</b><p>O valor que <b>mais aparece</b>. Pode não existir (<i>amodal</i>), ser uma só (<i>unimodal</i>) ou duas (<i>bimodal</i>).</p></div>
        <div class="box qt"><b>🎯 Mediana (Me)</b><p>O termo do <b>meio</b> depois de pôr em ordem (rol). Se a quantidade for <b>ímpar</b>: o do meio. Se for <b>par</b>: a média dos dois do meio.</p></div>
      </div>
      <div class="box"><b>↔️ Amplitude (A)</b><p>Mostra o quanto os dados estão espalhados: <b>A = maior valor − menor valor</b>.</p></div>
      <h4>Exemplo: notas de 6 alunos {5, 7, 7, 8, 9, 10}</h4>
      <div class="fig">${barChart([1, 2, 1, 1, 1], ['5', '7', '8', '9', '10'], { max: 3, ticks: 3, color: ['#9aa3b5', '#ff6b4a', '#9aa3b5', '#9aa3b5', '#9aa3b5'], ylabel: 'quantas vezes' })}
        <p class="center"><span class="pill">Mo = 7</span> <span class="pill">Me = ${FR('7 + 8', 2)} = 7,5</span> <span class="pill">A = 10 − 5 = 5</span></p></div>
      <div data-w="medidas"></div>
      <div data-w="ponderada"></div>
      ${exemplo('Exemplo 2b', 'Para as idades {12, 15, 13, 12, 18}, determine média, moda, mediana e amplitude.',
        `Rol: 12, 12, <b>13</b>, 15, 18. Média = ${FR('12 + 12 + 13 + 15 + 18', 5)} = ${FR(70, 5)} = <b>14</b>. Moda = <b>12</b> (aparece 2 vezes). Mediana = <b>13</b> (termo do meio). Amplitude = 18 − 12 = <b>6</b>.`)}`
  ]
};
