<template>
    <div class="course-info">
        <div class="course-info__header">
            <button @click.prevent="hideRightPanel" class="course-info__close">
                <vue-feather type="arrow-left" size="24" :stroke="stroke" />
            </button>
            <div class="course-info__icon">
                <skeleton-loader width="44px" height="44px" radius="10px" />
            </div>
            <div class="course-info__title">
                <skeleton-loader width="66px" height="25px" />
            </div>
        </div>
        <div class="course-info__cover">
            <skeleton-loader width="300px" height="180px" radius="10px" />
        </div>
        <div class="course-info__name">
            <skeleton-loader width="70px" height="30px" />
        </div>
        <div class="course-info__info-item course-info__level">
            <div class="course-info__info-icon">
                <vue-feather type="eye" size="17" stroke="#D94A4A" />
            </div>
            <div class="course-info__info-txt">
                <skeleton-loader width="140px" height="19px" />
            </div>
        </div>
        <div class="course-info__info-item course-info__words">
            <div class="course-info__info-icon">
                <vue-feather type="book" size="17" stroke="#2D9B32" />
            </div>
            <div class="course-info__info-txt">
                <skeleton-loader width="140px" height="19px" />
            </div>
        </div>
        <div class="course-info__info-item course-info__lessons">
            <div class="course-info__info-icon">
                <vue-feather type="map" size="17" stroke="#504EBA" />
            </div>
            <div class="course-info__info-txt">
                <skeleton-loader width="140px" height="19px" />
            </div>
        </div>
        <button @click.prevent="showLessonsList" class="course-info__all-lessons">
            <skeleton-loader width="140px" height="19px" />
        </button>
        <skeleton-loader width="300px" height="64px" radius="10px" />
    </div>
</template>

<script>
export default {
    name: 'course-info-skeleton',
    methods: {
        hideRightPanel() {
            this.$store.dispatch('ui/hideRightPanel')
        },
    }
}
</script>

<style lang="scss" scoped>
.course-info {
    padding: 35px 30px;
    transition: opacity 0.2s linear;
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    &__close {
        background: none;
        border: none;
        line-height: 0;
        cursor: pointer;
        margin-right: 15px;
    }

    &__icon {
        margin-right: 5px;
    }

    &__cover {
        margin-bottom: 10px;
    }

    &__name {
        margin-bottom: 13px;
    }

    &__info-item {
        border-radius: 10px;
        padding: 9px;
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    &__info-icon {
        width: 38px;
        height: 38px;
        margin-right: 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__level {
        background: #ffaaaa;
        .course-info__info-icon {
            background: #ff7e7e;
        }
        .course-info__info-txt {
            color: #702525;
        }
    }

    &__words {
        background: #a3eea6;
        .course-info__info-icon {
            background: #69d373;
        }
        .course-info__info-txt {
            color: #2d6b2f;
        }
    }

    &__lessons {
        background: #c7c6f1;
        .course-info__info-icon {
            background: #9896cc;
        }
        .course-info__info-txt {
            color: #34335e;
        }
    }
    &__all-lessons {
        background: none;
        border: none;
        display: block;
        margin: 40px auto 20px;
    }
}
</style>