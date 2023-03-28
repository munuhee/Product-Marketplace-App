from rest_framework import serializers
from django.contrib.auth.models import User
from account.models import Profile
from subscription.serializers import SubscriptionSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    subscription = SubscriptionSerializer()

    class Meta:
        model = Profile
        fields = ('id', 'user', 'subscription')

    def create(self, validated_data):
        """
        Create a new profile and corresponding user.
        """
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        profile = Profile.objects.create(user=user, **validated_data)
        return profile

    def update(self, instance, validated_data):
        """
        Update an existing profile and corresponding user.
        """
        user_data = validated_data.pop('user')
        user = instance.user
        user.username = user_data.get('username', user.username)
        user.email = user_data.get('email', user.email)
        user.save()

        subscription_data = validated_data.pop('subscription')
        subscription = instance.subscription
        subscription.plan = subscription_data.get('plan', subscription.plan)
        subscription.period = subscription_data.get('period', subscription.period)
        subscription.price = subscription_data.get('price', subscription.price)
        subscription.save()

        instance.save()
        return instance
