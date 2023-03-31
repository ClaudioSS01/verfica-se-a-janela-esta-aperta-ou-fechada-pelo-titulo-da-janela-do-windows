import pyautogui
import sys
tituloDaJanela = str(sys.argv[1])
def checarSeJanelaEstaAbertaPeloTitulo(title):
    # print(f'procurando por "{title}"')
    contador = 0
    for app in pyautogui.getAllWindows():
        # print(str(contador) +' - '+ app.title)
        contador = contador + 1
        if title.lower() in app.title.lower():
            # print(f'Encontrado = "{app.title}"')
            print("aberta")
            return "aberta"
    print("fechada")
    return "fechada"
    

checarSeJanelaEstaAbertaPeloTitulo(tituloDaJanela)

