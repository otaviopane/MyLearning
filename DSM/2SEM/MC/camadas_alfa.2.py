alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
exibicao = []
N = int(input('Número: '))
linhas = 2*(N)+1
matriz = []
lista = []
letra = alfabeto[N-1]
letras_centrais = (letra+' ') * N


for linha in range(0, linhas):
    if linha == N:
        print(f'{letras_centrais}* {letras_centrais}')
    elif linha == N-1
