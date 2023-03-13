# props 命名规范

在声明 prop 的时候，其命名应该始终使用 camelCase，
而在模板中应该始终使用 kebab-case

```js
// 推荐
<script>
  props: {
    greetingText: String;
  }
</script>

<welcome-message greeting-text="hi"></welcome-message>

// 不推荐
<script>
  props: {
    'greeting-text': String
  }
</script>

<welcome-message greetingText="hi"></welcome-message>
```
