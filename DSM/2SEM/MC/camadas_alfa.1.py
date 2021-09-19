alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
exibicao = []
n = int(input('Número: '))
linhas = 2*(n)+1
matriz = []
lista = []
for x in range(0, linhas):
    matriz.append(lista)

for e1 in range(0, linhas):
    letra = alfabeto[n-1]
    if e1 == n:
        matriz[e1].append(f'{letra} * {letra}')
    else:
        matriz[e1].append((f'{letra} ')*linhas)
    # for e2 in range(0, linhas):
    #     lista.append()

print(matriz)
