<template>
    <div class="form">
        <div class="form__title">Создайте новый аккаунт</div>
        <div class="form__subtitle">Введите ваши данные ниже</div>
        <form @submit.prevent="handleRegisterSubmit" class="form__form">
            <div
                v-if="non_field_errors_alert"
                :class="`alert ${alert.type}`"
            >{{ non_field_errors_alert }}</div>
            <form-item
                v-model="username"
                name="username"
                label="Логин"
                type="text"
                placeholder="Введите имя пользователя"
                style="margin-bottom: 26px;"
                :submitted="submitted"
                :errors="login_alert"
            />
            <form-item
                v-model="email"
                name="email"
                label="Почта"
                type="email"
                placeholder="Введите почту"
                style="margin-bottom: 26px;"
                :submitted="submitted"
                :errors="email_alert"
            />
            <form-item
                v-model="password"
                name="password"
                label="Пароль"
                type="password"
                placeholder="Введите пароль"
                style="margin-bottom: 26px;"
                :submitted="submitted"
                :errors="password_alert"
            />
            <form-button :submitting="regestering">Зарегистрироваться</form-button>
        </form>
        <div class="login">
            или
            <br />
            <router-link to="/login">Войти</router-link>
        </div>
    </div>
</template>

<script>
import FormButton from './FormButton.vue'
import FormItem from './FormItem.vue'
export default {
    name: 'register-form',
    components: { FormButton, FormItem },
    data() {
        return {
            email: '',
            username: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        regestering() {
            return this.$store.state.auth.regestering ? true : null;
        },
        alert() {
            return this.$store.state.alert.auth_errors
        },
        login_alert() {
            return this.alert.username
        },
        email_alert() {
            return this.alert.email
        },
        password_alert() {
            return this.alert.password
        },
        non_field_errors_alert() {
            return this.alert.non_field_errors
        },
    },
    watch: {
        $route(to, from) {
            // clear alert on location change
            this.$store.dispatch('alert/clear');
        }
    },
    created() {
        // Снять статус аутентифицированного
        this.$store.dispatch('auth/logout');
    },
    methods: {
        handleRegisterSubmit(e) {
            this.submitted = true;
            const { email, username, password } = this;
            const { dispatch } = this.$store;
            if (email && username && password) {
                dispatch('auth/register', { email, username, password });
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.form {
    width: 100%;
    background: #ffffff;
    border-radius: 16px;
    padding: 60px 34px 30px;
    &__title {
        font-weight: 700;
        font-size: 25px;
        line-height: 31px;
        text-align: center;
        letter-spacing: 0.323577px;
        margin-bottom: 13px;
        .red {
            font: inherit;
            color: #f05555;
        }
    }
    &__subtitle {
        font-size: 15px;
        text-align: center;
        line-height: 22px;
        margin-bottom: 40px;
    }
    &__form {
    }
    .login {
        margin-top: 5px;
        color: #9fa2b4;
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.323577px;
        a {
            text-decoration: none;
            font: inherit;
            color: #3751ff;
        }
    }
    .alert {
        color: #f05555;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.323577px;
        margin-bottom: 10px;
    }
}
</style>