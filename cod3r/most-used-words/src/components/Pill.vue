<template>
  <div class="pill">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'amount'],
};
</script>

<style scoped>
.pill {
  margin: 10px;
  height: 55px;
  border-radius: 30px;

  font-size: 1.3em;
  font-weight: bold;

  background-color: #dc143c;
  color: #fff;

  display: flex;
  align-items: center;
}

.pill .name {
  margin-left: 15px;
}

.pill .amount {
  margin: 10px;
  padding: 5px;
  width: 35px;
  height: 35px;

  border-radius: 50%;
  background-color: #fff;
  color: #dc143c;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
