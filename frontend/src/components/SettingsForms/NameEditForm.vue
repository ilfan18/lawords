<template>
    <div class="name-form settings-form">
        <div class="settings-form__heading">Имя</div>
        <div class="settings-form__body">
            <form @submit.prevent="handleNameSubmit" class="settings-form__form">
                <edit-form-input
                    v-model="firstName"
                    name="first_name"
                    label="Имя:"
                    type="text"
                    placeholder="Введите имя"
                    :submitted="submitted"
                    class="settings-form__item"
                    :errors="firstNameErrors"
                />
                <edit-form-input
                    v-model="lastName"
                    name="last_name"
                    label="Фамилия:"
                    type="text"
                    placeholder="Введите фамилию"
                    :submitted="submitted"
                    class="settings-form__item"
                    :errors="lastNameErrors"
                />
                <button class="settings-form__button">Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import editFormInput from './SettingsFormsComponents/editFormInput.vue';
export default {
    components: { editFormInput },
    name: 'name-edit-form',
    data() {
        return {
            firstName: this.$store.state.user.user.first_name,
            lastName: this.$store.state.user.user.last_name,
            submitted: false
        }
    },
    computed: {
        ...mapState({
            firstNameErrors: state => state.alert.first_name,
            lastNameErrors: state => state.alert.last_name,
        }),
    },
    methods: {
        handleNameSubmit() {
            this.submitted = true;
            const property = { first_name: this.firstName, last_name: this.lastName }
            this.$store.dispatch('user/userPropertyEdit', property);
        }
    },
}
</script>

<style lang="scss">
.name-form {
}
</style>