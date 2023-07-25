from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .serializers import ContributorSerializer
from rest_framework import generics
from contributor_management.models import Contributor

class ContributorAPIView(generics.ListCreateAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer

class ContributorCreate(generics.CreateAPIView):
    permission_classes = [IsAuthenticated | IsAdminUser]
    serializer_class = ContributorSerializer


class ContributorDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated | IsAdminUser]
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer

class ContributorUpdate(generics.UpdateAPIView):
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer
    permission_classes = [IsAuthenticated | IsAdminUser]

    def get_object(self):
        obj = super().get_object()
        if obj.contributor.user != self.request.user:
            self.permission_denied(self.request)
        return obj

class ContributorDestroy(generics.DestroyAPIView):
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get_object(self):
        obj = super().get_object()
        if obj.contributor.user != self.request.user:
            self.permission_denied(self.request)
        return obj