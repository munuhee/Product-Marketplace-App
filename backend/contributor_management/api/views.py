from rest_framework.permissions import IsAuthenticated
from .serializers import ContributorSerializer
from rest_framework import generics
from contributor_management.models import Contributor

class ContributorAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer

