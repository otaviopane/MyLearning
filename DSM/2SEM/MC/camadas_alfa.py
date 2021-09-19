alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

n = int(input('Digitos: '))
itens_antes_ast = 4**n
exibir = '*'
i = 1
if n < 53:
    while not n == 0:
        itens_linha = (2*i)+1
        if n > 26:
            n -= 26
            l = alfabeto[n-1].upper()
        else:
            l = alfabeto[n-1]
        centro = exibir

        exibir = (f'''
        {(l+' ')*itens_linha}
        {(l+' '+centro+' '+l)*()}
        {(l+' ')*itens_linha} ''')
        n -= 1
        i += 1
    print(exibir)

else:
    print('Número além do limite! (52)')
