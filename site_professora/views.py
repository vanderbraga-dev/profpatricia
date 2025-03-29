from django.shortcuts import render, redirect
from .models import Mensagem

# Create your views here.
from django.shortcuts import render

def home(request):
    return render(request, 'home.html')  # Renderiza o template da página inicial

def publicacoes(request):
    return render(request, 'publicacoes.html')  # Renderiza o template da página de publicações

def ensino(request):
    return render(request, 'ensino.html')  # Renderiza o template da página de ensino

def contato(request):
    return render(request, 'contato.html')  # Renderiza o template da página de contato

def home(request):
    projetos = range(1, 11)  # Intervalo de 1 a 10
    return render(request, 'home.html', {'projetos': projetos})

def contato(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        mensagem = request.POST.get('mensagem')

        # Salva a mensagem no banco de dados
        Mensagem.objects.create(nome=nome, mensagem=mensagem)

        return redirect('contato')  # Redireciona para a mesma página após enviar
    mensagens = Mensagem.objects.all()
    return render(request, 'contato.html', {'mensagens': mensagens})

