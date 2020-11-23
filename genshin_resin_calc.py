# https://pt.stackoverflow.com/questions/329737/como-calcular-hor%c3%a1rio-de-t%c3%a9rmino-em-python/329764#329764
# CALCULADORA DE RESINA DO GENSHIN IMPACT!!! CALCULA QUANTO FALTA PARA UM NÚMERO ESPECIFICO E PARA ENCHER TOTALMENTE!

import datetime

tempo_resina = 8 # min
max_resina = 160 # max de estoque
quantidade_resina = int(input('Quantidade de resina atual: '))
quantidade_desejada = int(input('Quantidade desejada: '))
quantidade_necessaria = quantidade_desejada - quantidade_resina
quentidade_enche = 160 - quantidade_resina
tempo_estimado = quantidade_necessaria * tempo_resina
tempo_enche = quentidade_enche * tempo_resina

agora = datetime.datetime.now()
momento_pronto = agora + datetime.timedelta(minutes = tempo_estimado)
momento_cheio = agora + datetime.timedelta(minutes = tempo_enche)

print(f'O tempo estimado para completar {quantidade_desejada} resinas é de: {tempo_estimado} minutos.')
print(f'Chegara ao objetivo aproximadamente: {momento_pronto.strftime("%H:%M")} '
      f'e encherá totalmente às: {momento_cheio.strftime("%H:%M")}')
