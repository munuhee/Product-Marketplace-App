import datetime
import cloudinary
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-^0ho!d(@-a$ebbi57lx=b+8hao!ng5kex!@nd_6@ym&e2p_9kr'

DEBUG = True

if DEBUG == True:
    ALLOWED_HOSTS = ['localhost', '127.0.0.1']
else:
    ALLOWED_HOSTS = ['www.example.com']

INSTALLED_APPS = [
    'users',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'django_pesapal',
    'cloudinary',
    'mptt',
    'mixer',
    'djrichtextfield',
    'account.apps.AccountConfig',
    'store.apps.StoreConfig',
    'admin_dashboard.apps.AdminDashboardConfig',
    'contributor_management.apps.ContributorManagementConfig',
    'authentication.apps.AuthenticationConfig'
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

#pesapal integration
PESAPAL_CONSUMER_KEY = 'UiP4RWd22mlI5ixzmIa6hB36yXB2Fmcp'
PESAPAL_CONSUMER_SECRET = 'yGQzJhMJcrJ+FSPaXOuEfSUv3ZA='
PESAPAL_DEMO = True


CSRF_COOKIE_SAMESITE = "None" if DEBUG else "Lax"
SESSION_COOKIE_SAMESITE = "None" if DEBUG else "Lax"
CSRF_COOKIE_HTTPONLY = True
SESSION_COOKIE_HTTPONLY = True
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True

CORS_ALLOWED_ORIGINS = (
    'http://localhost:3000',
    'http://127.0.0.1:3000',
)

CSRF_TRUSTED_ORIGINS = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
]

CORS_EXPOSE_HEADERS = ['Content-Type', "X-CSRFToken"]

CORS_ALLOW_CREDENTIALS = True

ROOT_URLCONF = 'next_store.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates']
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'next_store.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_USER_MODEL = 'users.CustomUser'

AUTHENTICATION_BACKENDS = [
    'authentication.backends.EmailBackend',
]

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = '/static/'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

#Rest framework
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 9,
    'MAX_PAGE_SIZE': 9,
}

#simple_jwt
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': datetime.timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': datetime.timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,

    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'email',
    'USER_ID_CLAIM': 'email',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',
}

#cloudinary
cloudinary.config(
    cloud_name = "murste",
    api_key = "954227928843165",
    api_secret = "xCtcgqFOXLX71kj1f1X-fwxT610"
)

#paypal
PAYPAL_MODE ='sandbox'
PAYPAL_CLIENT_ID = 'ASZM2BBdTX_jI4dtaug2AIXVa09ktUDiTZeNRRwDAaesL0PX9J8nH8hxj8OCsSCU-nzT3hV1JAm8_Yxm'
PAYPAL_CLIENT_SECRET = 'EIwzzZT0kf8bJBX9GL--bvLXdTKiD9oFERktCeioSLr75oSlbPHpgyidjTTusU7NF7rtlTgAWGS1C8eN'