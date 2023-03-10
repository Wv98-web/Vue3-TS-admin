<template>
	<div class="about">
		<h1>This is an about page</h1>

		<div>
			<el-input v-model="name" style="width: 300px; margin-right: 10px;"></el-input>
			<el-button @click="btnClick">按名称搜索</el-button>
			<el-button @click="clearClick">重置</el-button>
			<el-table :data="table">
				<el-table-column prop="data" label="Data" />
				<el-table-column prop="name" label="Name" />
				<el-table-column prop="address" label="Address" />
			</el-table>
		</div>

		<div style="margin-top: 20px;">
			{{ user.name }}
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
interface User {
	name: string;
	id: number;
}

const user: User = {
	name: 'wuwei',
	id: 1
};

const tableData = ref([
	{
		data: '2016-06',
		name: 'ez',
		address: 'dema'
	},
	{
		data: '2016-06',
		name: 'dt',
		address: 'dema'
	},
	{
		data: '2016-06',
		name: 'll',
		address: 'dema'
	},
	{
		data: '2016-06',
		name: 'gl',
		address: 'dema'
	}
]);
const table = ref(tableData.value);
const name = ref('');
const btnClick = (evt: Event) => {
	console.log(evt);
	if (name.value != '') {
		table.value = tableData.value.filter((res) => {
			return res.name == name.value;
		});
	}
};
const clearClick = () => {
	table.value = tableData.value;
	name.value = '';
};
</script>