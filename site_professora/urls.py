from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Página inicial
    path('publicacoes/', views.publicacoes, name='publicacoes'),  # Página de publicações
    path('ensino/', views.ensino, name='ensino'),  # Página de ensino
    path('contato/', views.contato, name='contato'),  # Página de contato
    path('contato/', views.contato, name='contato'),
]
