<template>
	<div class="home">
		<div class="common-layout">
			<el-container>
				<el-header>
					<el-row :gutter="20">
						<el-col :span="4">
							<img
								src="../assets/logo.png"
								class="logo"
							/>
						</el-col>
						<el-col :span="16">
							<h2>后台管理系统</h2>
						</el-col>
						<el-col :span="4">
							<el-button class="quit-login">退出登录</el-button>
						</el-col>
					</el-row>
				</el-header>
				<el-container>
					<el-aside width="200px">
						<el-menu
							active-text-color="#ffd04b"
							background-color="#545c64"
							class="el-menu-vertical-demo"
							default-active="2"
							text-color="#fff"
							router
						>
							<el-menu-item
								:index="item.path"
								v-for="item in list"
								:key="item.path"
							>
								<span>{{item.meta.title}}</span>
							</el-menu-item>
						</el-menu>
					</el-aside>
					<el-main><router-view></router-view></el-main>
				</el-container>
			</el-container>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
	name: 'HomeView',
	setup() {
		const router = useRouter();
		const list = router.getRoutes().filter((v) => v.meta.isShow);

		return { list };
	},
	components: {}
});
</script>

<style lang="scss" scoped>
.el-header {
	height: 50px;
	background-color: #666;

	.logo {
		height: 50px;
	}

	h2,
	.quit-login {
		text-align: center;
		line-height: 50px;
	}
}

.el-aside {
	height: calc(100vh - 50px);

	.el-menu {
		height: 100%;
	}
}

.el-main {
	height: calc(100vh - 50px);
}
</style>
