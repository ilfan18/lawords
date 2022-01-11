import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG = False

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'prod_db',
        'USER': 'admin',
        'PASSWORD': 'ruwejjfgvhervb',
        'HOST': 'localhost',
        'PORT': '5432',
        'TEST': {
            'NAME': 'test_db',
        },
    }
}

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_DIR = os.path.join(BASE_DIR, 'static')
