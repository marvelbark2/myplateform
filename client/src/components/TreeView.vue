<template>
  <li class="filter__tree-item">
    <div class="filter__link" @click="toggle" v-on:click="eventItem" @dblclick="makeFolder">
      <span><i v-if="isFolder && !isOpen" class="fas fa-arrow-right"></i> </span> &nbsp;
      <span :class="{ 'filter__link active': isOpen }"> {{ item.name }} </span>
      <span><i v-if="isFolder && isOpen" class="fas fa-arrow-down"></i> </span>
    </div>
    <ul v-show="isOpen" v-if="isFolder" class="filter__tree">
      <TreeView
        class="item"
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        @open-item="$emit('open-item', $event)"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
      ></TreeView>
    </ul>
  </li>
</template>

<script>
import TreeView from './TreeView';
export default {
  props: {
    item: Object,
  },
  components: {
      TreeView
  },
  data: function () {
    return {
      isOpen: false,
    };
  },
  computed: {
    isFolder: function () {
      return this.item.children && this.item.children.length;
    },
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    makeFolder: function () {
      if (!this.isFolder) {
        this.$emit("make-folder", this.item);
        this.isOpen = true;
      }
    },
    eventItem: function () {
        if(this.item.event)
          this.$emit('open-item', this.item.id);
    }
  },
};
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
$tree-padding: 15px;
.filter {
	&__tree {
		margin: 0;
		padding: 0;
		list-style-type: none;
		position: relative;
		.filter__tree {
			padding-left: $tree-padding;
			.filter__tree-item {
				position: relative;
				&:before {
					position: absolute;
					content: '';
					height: 100%;
					width: 2px;
					background: #CFD0D4; //$color-gray-300
					left: -$tree-padding/1.5;
				}
				.filter__link {
					&:hover, &:focus {
						&:before {
							position: absolute;
							content: '';
							height: 100%;
							width: 2px;
							left: -$tree-padding/1.5;
							background: currentColor;
						}
					}
				}
			}
		}
	}
	&__link {
		text-align: left;
		padding-top: 3px;
		padding-bottom: 3px;
		display: block;
		color: #77787C;
		animation: fade 350ms ease forwards;
		cursor: pointer;
		&:hover, &:focus {
			color: #55595c; // $primary
			background: transparentize(#edf1f5, .4);
		}
		&.active {
			font-weight: 700;
			color: #55595c; // $primary
		}
	}
}
</style>