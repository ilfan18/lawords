<template>
    <li class="lessons-list-item">
        <router-link
            v-if="isDone || isActive"
            :to="lessonUrl"
            class="lessons-list-item__link"
            :class="{ done: isDone, active: isActive }"
        >
            <span class="lessons-list-item__num">{{ index + 1 }}.</span>
            <span class="lessons-list-item__name">{{ lesson.name }}</span>
            <span class="lessons-list-item__icon">
                <vue-feather v-if="isDone" size="24" type="check-circle" stroke="#5CBC6B" />
                <vue-feather v-else-if="isActive" size="24" type="clock" stroke="#A8A8A8" />
            </span>
        </router-link>
        <div v-else class="lessons-list-item__link" :class="{ done: isDone, active: isActive }">
            <span class="lessons-list-item__num">{{ index + 1 }}.</span>
            <span class="lessons-list-item__name">{{ lesson.name }}</span>
            <span class="lessons-list-item__icon">
                <vue-feather size="24" type="x-circle" stroke="#A8A8A8" />
            </span>
        </div>
    </li>
</template>

<script>
export default {
    name: 'right-panel-lessons-list-item',
    props: {
        lesson: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        isDone: {
            type: Boolean,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        },
    },
    computed: {
        lessonUrl() {
            return '/lessons/' + this.lesson.id
        }
    },
}
</script>

<style lang="scss" scoped>
.lessons-list-item {
    margin-bottom: 20px;
    &__link {
        text-decoration: none;
        padding: 17px 20px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        background: var(--background-fourth);
        border-radius: 10px;
        display: flex;
        align-items: center;
        color: #737373;
        cursor: default;
        &.done {
            background: #bbfab1;
            color: #272727;
            cursor: pointer;
        }
        &.active {
            color: var(--text-fourth);
            cursor: pointer;
        }
    }
    &__num {
        margin-right: 17px;
    }
    &__name {
    }
    &__icon {
        display: flex;
        margin-left: auto;
    }
}
</style>