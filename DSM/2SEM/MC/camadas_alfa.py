alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

n = int(input('Digitos: '))
e = n + 2
i = 0
while not i == n:
    print(f'{alfabeto[n-1]} '*e)
    i += 1


print(
    f'''
   *
   '''
)
