alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
exibicao = []
N = int(input('Número: '))
linhas = 2*(N)+1
matriz = []
lista = []
letra = alfabeto[N-1]
letras_centrais = (letra+' ') * N
for _ in range(0, linhas):
    matriz.append(lista)

for e1 in range(0, linhas):
    letra = alfabeto[N-1]
    if e1 == N:
        matriz[e1].append(f'{letras_centrais}* {letras_centrais}')
    else:
        matriz[e1].append((f'{letra} ')*linhas)

for n in range(0, linhas):
    print(lista[n])
