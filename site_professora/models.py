from django.db import models

class Mensagem(models.Model):
    nome = models.CharField(max_length=100)
    mensagem = models.TextField()
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nome}: {self.mensagem[:20]}..."

