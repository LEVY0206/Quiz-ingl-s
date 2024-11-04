const perguntas = [
    {
        pergunta: "This painting is __________.",
        opcoes: ["ugly", "beautiful", "dirty", "clean"],
        resposta: "beautiful",
        explicacao: "Beautiful significa algo que é esteticamente agradável."
    },
    {
        pergunta: "The room was __________ after the party.",
        opcoes: ["dirty", "clean", "tall", "fast"],
        resposta: "dirty",
        explicacao: "Dirty se refere a algo que não está limpo."
    },
    {
        pergunta: "The building is very __________.",
        opcoes: ["short", "tall", "old", "happy"],
        resposta: "tall",
        explicacao: "Tall descreve algo que tem uma altura grande."
    },
    {
        pergunta: "She wants a __________ house.",
        opcoes: ["big", "small", "long", "narrow"],
        resposta: "big",
        explicacao: "Big refere-se a um tamanho grande."
    },
    {
        pergunta: "His clothes are always __________.",
        opcoes: ["clean", "dirty", "hot", "cold"],
        resposta: "clean",
        explicacao: "Clean significa que algo está livre de sujeira."
    },
    {
        pergunta: "The cat is very __________ when it runs.",
        opcoes: ["slow", "fast", "big", "thin"],
        resposta: "fast",
        explicacao: "Fast significa que algo se move rapidamente."
    },
    {
        pergunta: "The road is __________ to the store.",
        opcoes: ["far", "near", "long", "short"],
        resposta: "near",
        explicacao: "Near significa que está a uma curta distância."
    },
    {
        pergunta: "She is feeling __________ after the news.",
        opcoes: ["sad", "happy", "old", "dark"],
        resposta: "sad",
        explicacao: "Sad descreve uma emoção de tristeza."
    },
    {
        pergunta: "His old car is __________.",
        opcoes: ["new", "cheap", "expensive", "heavy"],
        resposta: "cheap",
        explicacao: "Cheap significa que algo tem um custo baixo."
    },
    {
        pergunta: "He is __________ than his brother.",
        opcoes: ["tall", "thin", "wide", "heavy"],
        resposta: "tall",
        explicacao: "Tall é um comparativo que indica maior altura."
    },
    {
        pergunta: "The garden is __________ with flowers.",
        opcoes: ["boring", "interesting", "fast", "old"],
        resposta: "interesting",
        explicacao: "Interesting refere-se a algo que capta a atenção."
    },
    {
        pergunta: "The __________ cat climbed the tall tree.",
        opcoes: ["big", "tiny", "short", "dirty"],
        resposta: "big",
        explicacao: "Big descreve um gato de grande porte."
    },
    {
        pergunta: "This dish is too __________ to eat.",
        opcoes: ["hot", "cold", "thick", "light"],
        resposta: "hot",
        explicacao: "Hot refere-se a uma temperatura alta."
    },
    {
        pergunta: "The box is __________ to lift.",
        opcoes: ["light", "heavy", "thin", "wide"],
        resposta: "heavy",
        explicacao: "Heavy significa que algo tem um peso grande."
    },
    {
        pergunta: "She bought a __________ dress.",
        opcoes: ["cheap", "beautiful", "expensive", "dirty"],
        resposta: "beautiful",
        explicacao: "Beautiful refere-se a algo esteticamente agradável."
    },
    {
        pergunta: "The __________ child made a mess.",
        opcoes: ["clean", "ugly", "dirty", "happy"],
        resposta: "dirty",
        explicacao: "Dirty refere-se a algo que não está limpo."
    },
    {
        pergunta: "His shoes are __________ after the game.",
        opcoes: ["dirty", "clean", "beautiful", "big"],
        resposta: "dirty",
        explicacao: "Dirty significa que os sapatos estão sujos."
    },
    {
        pergunta: "The __________ book kept me awake all night.",
        opcoes: ["boring", "interesting", "old", "new"],
        resposta: "interesting",
        explicacao: "Interesting significa que algo é cativante."
    },
    {
        pergunta: "Her dress is __________ than mine.",
        opcoes: ["more beautiful", "less beautiful", "cheap", "expensive"],
        resposta: "more beautiful",
        explicacao: "A forma comparativa de beautiful é more beautiful."
    },
    {
        pergunta: "The view from the mountain is __________.",
        opcoes: ["ugly", "beautiful", "cold", "cheap"],
        resposta: "beautiful",
        explicacao: "Beautiful descreve uma cena agradável aos olhos."
    },
    {
        pergunta: "The __________ puppy is playing in the yard.",
        opcoes: ["big", "small", "happy", "sad"],
        resposta: "small",
        explicacao: "Small refere-se a algo de tamanho reduzido."
    },
    {
        pergunta: "This bag is too __________ to carry.",
        opcoes: ["heavy", "light", "old", "beautiful"],
        resposta: "heavy",
        explicacao: "Heavy indica que algo tem um peso grande."
    },
    {
        pergunta: "I prefer __________ food to fast food.",
        opcoes: ["clean", "expensive", "cheap", "healthy"],
        resposta: "healthy",
        explicacao: "Healthy significa que é bom para a saúde."
    },
    {
        pergunta: "The movie was so __________ that I fell asleep.",
        opcoes: ["boring", "interesting", "old", "tall"],
        resposta: "boring",
        explicacao: "Boring refere-se a algo que não é divertido."
    },
    {
        pergunta: "My house is __________ than yours.",
        opcoes: ["bigger", "smaller", "older", "taller"],
        resposta: "bigger",
        explicacao: "Bigger é a forma comparativa de big."
    },
    {
        pergunta: "The __________ water in the glass is cold.",
        opcoes: ["old", "new", "clean", "dirty"],
        resposta: "clean",
        explicacao: "Clean refere-se a água sem sujeira."
    },
    {
        pergunta: "She is __________ at her job.",
        opcoes: ["happy", "sad", "boring", "ugly"],
        resposta: "happy",
        explicacao: "Happy descreve um estado de contentamento."
    },
        {
        pergunta: "That dress is too __________ for me.",
        opcoes: ["expensive", "cheap", "old", "beautiful"],
        resposta: "expensive",
        explicacao: "Expensive significa que algo custa muito dinheiro."
    },
    {
        pergunta: "The __________ tree in the park is the tallest.",
        opcoes: ["short", "tall", "wide", "thin"],
        resposta: "tall",
        explicacao: "Tall descreve algo de altura grande."
    },
    {
        pergunta: "My new shoes are __________.",
        opcoes: ["dirty", "clean", "ugly", "thick"],
        resposta: "clean",
        explicacao: "Clean refere-se a algo que está livre de sujeira."
    },
    {
        pergunta: "He feels __________ because he didn't study.",
        opcoes: ["happy", "sad", "beautiful", "ugly"],
        resposta: "sad",
        explicacao: "Sad significa estar triste."
    },
    {
        pergunta: "The water in the pool is __________.",
        opcoes: ["dirty", "clean", "hot", "cold"],
        resposta: "clean",
        explicacao: "Clean significa que não tem sujeira."
    },
    {
        pergunta: "My friend is __________ at basketball.",
        opcoes: ["fast", "slow", "dirty", "clean"],
        resposta: "fast",
        explicacao: "Fast descreve alguém que se move rapidamente."
    },
    {
        pergunta: "She has a __________ collection of books.",
        opcoes: ["big", "small", "narrow", "short"],
        resposta: "big",
        explicacao: "Big refere-se a um tamanho grande."
    },
    {
        pergunta: "The cake was too __________ to eat quickly.",
        opcoes: ["thick", "thin", "big", "small"],
        resposta: "thick",
        explicacao: "Thick refere-se a algo que tem uma boa largura."
    },
    {
        pergunta: "The __________ painting was admired by everyone.",
        opcoes: ["ugly", "beautiful", "old", "sad"],
        resposta: "beautiful",
        explicacao: "Beautiful descreve algo que agrada visualmente."
    },
    {
        pergunta: "I found a __________ coin on the street.",
        opcoes: ["old", "new", "cheap", "expensive"],
        resposta: "old",
        explicacao: "Old refere-se a algo que tem muito tempo."
    },
    {
        pergunta: "She is wearing a __________ hat.",
        opcoes: ["big", "small", "ugly", "beautiful"],
        resposta: "beautiful",
        explicacao: "Beautiful descreve algo que é agradável aos olhos."
    },
    {
        pergunta: "The __________ dog is barking loudly.",
        opcoes: ["tall", "short", "big", "small"],
        resposta: "big",
        explicacao: "Big significa que é de grande porte."
    },
    {
        pergunta: "The chair is __________ than the table.",
        opcoes: ["smaller", "bigger", "taller", "older"],
        resposta: "smaller",
        explicacao: "Smaller é a forma comparativa de small."
    },
    {
        pergunta: "He is __________ to finish his homework.",
        opcoes: ["fast", "slow", "near", "far"],
        resposta: "fast",
        explicacao: "Fast significa que ele consegue fazer rapidamente."
    },
    {
        pergunta: "The __________ room was filled with laughter.",
        opcoes: ["sad", "happy", "dark", "cold"],
        resposta: "happy",
        explicacao: "Happy descreve um ambiente alegre."
    },
    {
        pergunta: "The path was __________ to walk on.",
        opcoes: ["clean", "dirty", "difficult", "easy"],
        resposta: "easy",
        explicacao: "Easy significa que não é difícil."
    },
    {
        pergunta: "The __________ elephant walked through the forest.",
        opcoes: ["big", "small", "thin", "narrow"],
        resposta: "big",
        explicacao: "Big refere-se a um animal de grande porte."
    },
    {
        pergunta: "Her dress is __________ than mine.",
        opcoes: ["more beautiful", "less beautiful", "ugly", "nice"],
        resposta: "more beautiful",
        explicacao: "A forma comparativa é usada para descrever a beleza."
    },
    {
        pergunta: "The sun is __________ during summer.",
        opcoes: ["hot", "cold", "beautiful", "ugly"],
        resposta: "hot",
        explicacao: "Hot refere-se a uma temperatura elevada."
    },
    {
        pergunta: "The __________ book was hard to read.",
        opcoes: ["difficult", "easy", "boring", "interesting"],
        resposta: "difficult",
        explicacao: "Difficult significa que é desafiador."
    },
    {
        pergunta: "The dog is __________ to the cat.",
        opcoes: ["dangerous", "safe", "friendly", "ugly"],
        resposta: "friendly",
        explicacao: "Friendly refere-se a um animal que é sociável."
    },
    {
        pergunta: "The sky is __________ at night.",
        opcoes: ["dark", "light", "cold", "beautiful"],
        resposta: "dark",
        explicacao: "Dark significa que não há luz."
    },
    {
        pergunta: "My new car is __________.",
        opcoes: ["old", "new", "cheap", "ugly"],
        resposta: "new",
        explicacao: "New refere-se a algo que foi feito recentemente."
    },
    {
        pergunta: "This dress is too __________ for the party.",
        opcoes: ["ugly", "beautiful", "expensive", "cheap"],
        resposta: "expensive",
        explicacao: "Expensive significa que custa muito dinheiro."
    },
    {
        pergunta: "The book is __________ the shelf.",
        opcoes: ["under", "in", "on", "at"],
        resposta: "on",
        explicacao: "On é usado para indicar a posição em uma superfície."
    },
    {
        pergunta: "We walked __________ the bridge.",
        opcoes: ["under", "over", "between", "in"],
        resposta: "over",
        explicacao: "Over significa que estamos passando acima de algo."
    },
    {
        pergunta: "She sat __________ the chair.",
        opcoes: ["on", "at", "in", "by"],
        resposta: "on",
        explicacao: "On indica que alguém está em cima de uma superfície."
    },
    {
        pergunta: "The dog ran __________ the park.",
        opcoes: ["in", "on", "at", "between"],
        resposta: "in",
        explicacao: "In indica que algo está dentro de um espaço."
    },
    {
        pergunta: "He placed the vase __________ the table.",
        opcoes: ["on", "in", "at", "with"],
        resposta: "on",
        explicacao: "On mostra a posição em uma superfície."
    },
    {
        pergunta: "The kids are playing __________ the playground.",
        opcoes: ["in", "on", "at", "between"],
        resposta: "in",
        explicacao: "In indica que eles estão dentro do espaço do parque."
    },
    {
        pergunta: "The picture is __________ the wall.",
        opcoes: ["at", "on", "in", "under"],
        resposta: "on",
        explicacao: "On é usado para indicar que algo está fixado em uma superfície."
    },
    {
        pergunta: "She walked __________ the store to buy milk.",
        opcoes: ["to", "at", "with", "by"],
        resposta: "to",
        explicacao: "To indica movimento em direção a um lugar."
    },
    {
        pergunta: "He is sitting __________ his desk.",
        opcoes: ["at", "in", "on", "with"],
        resposta: "at",
        explicacao: "At é usado para indicar um ponto específico."
    },
    {
        pergunta: "The cat is hiding __________ the sofa.",
        opcoes: ["under", "over", "in", "between"],
        resposta: "under",
        explicacao: "Under indica que algo está abaixo de outra coisa."
    },
    {
        pergunta: "The bird flew __________ the tree.",
        opcoes: ["over", "on", "in", "under"],
        resposta: "over",
        explicacao: "Over significa que algo está acima de outra coisa."
    },
    {
        pergunta: "We will meet __________ noon.",
        opcoes: ["at", "in", "on", "by"],
        resposta: "at",
        explicacao: "At é usado para indicar um horário específico."
    },
    {
        pergunta: "She lives __________ a small village.",
        opcoes: ["in", "on", "at", "by"],
        resposta: "in",
        explicacao: "In é usado para descrever que alguém reside dentro de uma área."
    },
    {
        pergunta: "He arrived __________ the airport late.",
        opcoes: ["at", "in", "on", "by"],
        resposta: "at",
        explicacao: "At indica a chegada a um local específico."
    },
    {
        pergunta: "The dog is sleeping __________ the bed.",
        opcoes: ["on", "in", "under", "at"],
        resposta: "on",
        explicacao: "On significa que o cachorro está em cima da cama."
    },
    {
        pergunta: "She put the keys __________ her bag.",
        opcoes: ["in", "on", "under", "at"],
        resposta: "in",
        explicacao: "In indica que os objetos estão dentro de algo."
    },
    {
        pergunta: "He walked __________ the street.",
        opcoes: ["across", "through", "over", "at"],
        resposta: "across",
        explicacao: "Across significa que ele atravessou a rua."
    },
    {
        pergunta: "They sat __________ the table for dinner.",
        opcoes: ["at", "on", "in", "under"],
        resposta: "at",
        explicacao: "At é usado para indicar a posição em um lugar específico."
    },
    {
        pergunta: "The dog jumped __________ the fence.",
        opcoes: ["over", "at", "on", "in"],
        resposta: "over",
        explicacao: "Over indica que o cachorro saltou acima da cerca."
    },
    {
        pergunta: "We arrived __________ the party early.",
        opcoes: ["in", "at", "on", "by"],
        resposta: "at",
        explicacao: "At é usado para indicar um evento específico."
    },
    {
        pergunta: "She will call you __________ the morning.",
        opcoes: ["in", "at", "on", "by"],
        resposta: "in",
        explicacao: "In é usado para descrever um período de tempo."
    },
    {
        pergunta: "The picture is hanging __________ the wall.",
        opcoes: ["on", "in", "under", "between"],
        resposta: "on",
        explicacao: "On indica que a imagem está fixada na parede."
    },
    {
        pergunta: "He lives __________ the city center.",
        opcoes: ["in", "at", "on", "by"],
        resposta: "in",
        explicacao: "In indica que ele reside dentro da cidade."
    },
    {
        pergunta: "The kids are swimming __________ the pool.",
        opcoes: ["in", "on", "at", "under"],
        resposta: "in",
        explicacao: "In é usado para descrever que eles estão dentro da piscina."
    },
    {
        pergunta: "I will be there __________ five minutes.",
        opcoes: ["in", "at", "on", "by"],
        resposta: "in",
        explicacao: "In é usado para indicar um período de tempo."
    },
    {
        pergunta: "She stood __________ the door waiting for him.",
        opcoes: ["in", "at", "under", "by"],
        resposta: "at",
        explicacao: "At indica a posição em um ponto específico."
    },
    {
        pergunta: "The book is __________ the table.",
        opcoes: ["on", "under", "at", "between"],
        resposta: "on",
        explicacao: "On indica que o livro está em cima da mesa."
    },
    {
        pergunta: "He is sitting __________ his friends.",
        opcoes: ["with", "at", "in", "by"],
        resposta: "with",
        explicacao: "With indica que ele está acompanhado de seus amigos."
    },
    {
        pergunta: "She walked __________ the door.",
        opcoes: ["through", "under", "on", "by"],
        resposta: "through",
        explicacao: "Through significa que ela passou pelo espaço."
    },
    {
        pergunta: "They went __________ vacation last month.",
        opcoes: ["on", "in", "at", "by"],
        resposta: "on",
        explicacao: "On é usado para indicar que alguém está de férias."
    },
    {
        pergunta: "The dog ran __________ the yard.",
        opcoes: ["in", "on", "at", "under"],
        resposta: "in",
        explicacao: "In indica que o cachorro está dentro do quintal."
    },
    {
        pergunta: "He was born __________ April.",
        opcoes: ["in", "at", "on", "by"],
        resposta: "in",
        explicacao: "In é usado para descrever meses e anos."
    },
    {
        pergunta: "The gift is __________ the table.",
        opcoes: ["on", "under", "in", "at"],
        resposta: "on",
        explicacao: "On indica que o presente está em cima da mesa."
    },
    {
        pergunta: "She arrived __________ the airport early.",
        opcoes: ["in", "at", "on", "by"],
        resposta: "at",
        explicacao: "At indica a chegada a um local específico."
    },
    {
        pergunta: "The car is parked __________ the garage.",
        opcoes: ["in", "at", "on", "under"],
        resposta: "in",
        explicacao: "In indica que o carro está dentro do espaço da garagem."
    },
    {
        pergunta: "He looked __________ the window.",
        opcoes: ["through", "at", "on", "in"],
        resposta: "through",
        explicacao: "Through indica que ele estava olhando pelo espaço."
    },
    {
        pergunta: "The dog is hiding __________ the bushes.",
        opcoes: ["in", "at", "on", "under"],
        resposta: "under",
        explicacao: "Under indica que o cachorro está escondido abaixo dos arbustos."
    },
    {
        pergunta: "They traveled __________ the mountains last summer.",
        opcoes: ["through", "across", "in", "on"],
        resposta: "through",
        explicacao: "Through significa que eles atravessaram as montanhas."
    },
    {
        pergunta: "She placed the flowers __________ the vase.",
        opcoes: ["in", "on", "under", "at"],
        resposta: "in",
        explicacao: "In indica que as flores estão dentro do vaso."
    },
    {
        pergunta: "He drove __________ the tunnel.",
        opcoes: ["through", "in", "on", "at"],
        resposta: "through",
        explicacao: "Through indica que ele passou pelo túnel."
    },
    {
        pergunta: "The cat jumped __________ the fence.",
        opcoes: ["over", "under", "at", "in"],
        resposta: "over",
        explicacao: "Over significa que o gato saltou acima da cerca."
    },
    {
        pergunta: "She stood __________ the bus stop waiting for her ride.",
        opcoes: ["at", "in", "on", "with"],
        resposta: "at",
        explicacao: "At indica a posição em um ponto específico."
    },
    {
        pergunta: "He found his wallet __________ the couch.",
        opcoes: ["under", "on", "in", "at"],
        resposta: "under",
        explicacao: "Under indica que a carteira estava abaixo do sofá."
    },
    {
        pergunta: "They walked __________ the river to get to the park.",
        opcoes: ["along", "by", "across", "in"],
        resposta: "along",
        explicacao: "Along indica que eles caminharam ao longo do rio."
    },
    {
        pergunta: "She is interested __________ learning new languages.",
        opcoes: ["in", "on", "at", "by"],
        resposta: "in",
        explicacao: "In é usado para indicar interesse em algo."
    },
    {
        pergunta: "He lives __________ the second floor.",
        opcoes: ["on", "in", "at", "by"],
        resposta: "on",
        explicacao: "On indica que ele reside na parte superior de um prédio."
    },
    {
        pergunta: "The meeting is __________ Monday morning.",
        opcoes: ["on", "in", "at", "by"],
        resposta: "on",
        explicacao: "On é usado para indicar dias específicos."
    },
    {
        pergunta: "She walked __________ the hill to reach the top.",
        opcoes: ["up", "down", "across", "through"],
        resposta: "up",
        explicacao: "Up indica movimento em direção a uma posição mais elevada."
    },
    {
        pergunta: "She __________ (read) a book right now.",
        opcoes: ["is reading", "reads", "read", "was reading"],
        resposta: "is reading",
        explicacao: "O presente contínuo é usado para ações que estão acontecendo no momento."
    },
    {
        pergunta: "They __________ (play) soccer at the park.",
        opcoes: ["are playing", "play", "played", "was playing"],
        resposta: "are playing",
        explicacao: "Indica uma ação em andamento no presente."
    },
    {
        pergunta: "I __________ (watch) TV this evening.",
        opcoes: ["am watching", "watch", "watched", "was watching"],
        resposta: "am watching",
        explicacao: "O presente contínuo é usado para indicar uma ação que está ocorrendo agora."
    },
    {
        pergunta: "He __________ (write) an email to his friend.",
        opcoes: ["is writing", "writes", "wrote", "was writing"],
        resposta: "is writing",
        explicacao: "Indica que ele está no meio de uma ação."
    },
    {
        pergunta: "We __________ (study) for the exam this week.",
        opcoes: ["are studying", "study", "studied", "was studying"],
        resposta: "are studying",
        explicacao: "Mostra que a ação de estudar está acontecendo agora."
    },
    
    // Simple Present
    {
        pergunta: "She usually __________ (go) to the gym in the morning.",
        opcoes: ["goes", "go", "gone", "is going"],
        resposta: "goes",
        explicacao: "O simple present é usado para hábitos e rotinas."
    },
    {
        pergunta: "They __________ (like) to eat sushi.",
        opcoes: ["like", "likes", "liked", "is liking"],
        resposta: "like",
        explicacao: "Indica uma preferência ou gosto habitual."
    },
    {
        pergunta: "He __________ (play) the guitar every weekend.",
        opcoes: ["plays", "play", "played", "is playing"],
        resposta: "plays",
        explicacao: "O simple present é usado para ações regulares."
    },
    {
        pergunta: "We __________ (not go) to school on weekends.",
        opcoes: ["do not go", "does not go", "are not going", "was not going"],
        resposta: "do not go",
        explicacao: "Usado para expressar negação no simple present."
    },
    {
        pergunta: "I __________ (drink) coffee every morning.",
        opcoes: ["drink", "drinks", "drunk", "is drinking"],
        resposta: "drink",
        explicacao: "O simple present é usado para descrever ações habituais."
    },

    // Verbo to Be no Presente
    {
        pergunta: "I __________ (be) happy today.",
        opcoes: ["am", "is", "are", "was"],
        resposta: "am",
        explicacao: "O verbo to be no presente é usado para descrever estados atuais."
    },
    {
        pergunta: "They __________ (be) at the party right now.",
        opcoes: ["are", "is", "was", "were"],
        resposta: "are",
        explicacao: "Usado para indicar presença no momento."
    },
    {
        pergunta: "He __________ (be) a doctor.",
        opcoes: ["is", "am", "are", "was"],
        resposta: "is",
        explicacao: "O verbo to be é usado para descrever a profissão."
    },
    {
        pergunta: "We __________ (be) friends since childhood.",
        opcoes: ["have been", "was", "were", "are"],
        resposta: "are",
        explicacao: "Indica uma relação atual."
    },
    {
        pergunta: "You __________ (be) very kind.",
        opcoes: ["are", "is", "am", "were"],
        resposta: "are",
        explicacao: "Descreve a personalidade de alguém."

    },

    // Verbo to Be no Passado
    {
        pergunta: "I __________ (be) at the concert yesterday.",
        opcoes: ["was", "am", "are", "were"],
        resposta: "was",
        explicacao: "Usado para descrever um estado no passado."
    },
    {
        pergunta: "They __________ (be) very tired after the trip.",
        opcoes: ["were", "was", "are", "is"],
        resposta: "were",
        explicacao: "O passado do verbo to be é usado para descrever estados passados."
    },
    {
        pergunta: "She __________ (be) a great student last year.",
        opcoes: ["was", "were", "is", "are"],
        resposta: "was",
        explicacao: "Descreve o desempenho dela em um momento anterior."
    },
    {
        pergunta: "We __________ (be) happy to see you last week.",
        opcoes: ["were", "was", "are", "is"],
        resposta: "were",
        explicacao: "Usado para expressar uma emoção no passado."
    },
    {
        pergunta: "You __________ (be) late for the meeting.",
        opcoes: ["were", "was", "are", "is"],
        resposta: "were",
        explicacao: "Descreve a situação em um contexto passado."
    },

    // Verbo There to Be no Presente
    {
        pergunta: "There __________ (be) a book on the table.",
        opcoes: ["is", "are", "was", "were"],
        resposta: "is",
        explicacao: "Usado para indicar a existência de algo no presente."
    },
    {
        pergunta: "There __________ (be) many people at the party.",
        opcoes: ["are", "is", "was", "were"],
        resposta: "are",
        explicacao: "Indica que há muitas pessoas presentes."
    },
    {
        pergunta: "There __________ (be) a new restaurant in town.",
        opcoes: ["is", "are", "was", "were"],
        resposta: "is",
        explicacao: "Mostra a presença de um novo estabelecimento."
    },
    {
        pergunta: "There __________ (be) a problem with the computer.",
        opcoes: ["is", "are", "was", "were"],
        resposta: "is",
        explicacao: "Usado para identificar um problema atual."
    },
    {
        pergunta: "There __________ (be) too many cars on the road.",
        opcoes: ["are", "is", "was", "were"],
        resposta: "are",
        explicacao: "Indica a presença de um número elevado de carros."
    },
    
    // Outras Questões
    {
        pergunta: "I __________ (not be) sure about the answer.",
        opcoes: ["am not", "is not", "are not", "was not"],
        resposta: "am not",
        explicacao: "Usado para expressar dúvida no presente."
    },
    {
        pergunta: "She __________ (not go) to the party last night.",
        opcoes: ["did not go", "does not go", "is not going", "was not going"],
        resposta: "did not go",
        explicacao: "Usado para expressar negação no passado."
    },
    {
        pergunta: "We __________ (not have) a meeting tomorrow.",
        opcoes: ["do not have", "does not have", "are not having", "was not having"],
        resposta: "do not have",
        explicacao: "Indica que a reunião não ocorrerá."
    },
    {
        pergunta: "There __________ (not be) any milk left in the fridge.",
        opcoes: ["is not", "are not", "was not", "were not"],
        resposta: "is not",
        explicacao: "Usado para indicar a ausência de algo."
    },
    {
        pergunta: "You __________ (be) very good at math.",
        opcoes: ["are", "is", "am", "were"],
        resposta: "are",
        explicacao: "Usado para descrever uma habilidade atual."
    },
];

// Aqui você pode adicionar funções para manipular o quiz, como exibir perguntas, verificar respostas, etc.

let perguntaAtual = 0;

function mostrarPergunta() {
    const perguntaContainer = document.getElementById("pergunta");
    const opcoesContainer = document.getElementById("opcoes-container");
    const feedbackContainer = document.getElementById("feedback-container");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-question");
    const audio = document.getElementById("audio");

    feedbackContainer.classList.add("hidden");
    nextButton.classList.add("hidden");

    if (perguntaAtual < perguntas.length) {
        const pergunta = perguntas[perguntaAtual];
        perguntaContainer.innerText = pergunta.pergunta;
        opcoesContainer.innerHTML = "";

        pergunta.opcoes.forEach(opcao => {
            const button = document.createElement("button");
            button.innerText = opcao;
            button.classList.add("option-button");
            button.addEventListener("click", () => verificarResposta(opcao));
            opcoesContainer.appendChild(button);
        });
    } else {
        perguntaContainer.innerText = "Quiz terminado!";
        opcoesContainer.innerHTML = "";
        nextButton.classList.add("hidden");
    }
}

function verificarResposta(opcaoSelecionada) {
    const pergunta = perguntas[perguntaAtual];
    const feedbackContainer = document.getElementById("feedback-container");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-question");
    const audio = document.getElementById("audio");

    if (opcaoSelecionada === pergunta.resposta) {
        feedback.innerText = "Correto! " + pergunta.explicacao;
        audio.play();
    } else {
        feedback.innerText = "Errado! " + pergunta.explicacao;
    }

    feedbackContainer.classList.remove("hidden");
    nextButton.classList.remove("hidden");
}

document.getElementById("next-question").addEventListener("click", () => {
    perguntaAtual++;
    mostrarPergunta();
});

mostrarPergunta();