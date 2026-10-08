---
outline: deep
---

# Runtime API Examples

This page demonstrates usage of runtime APIs provided by VitePress.

The `useData()` API can access site, theme, page, and frontmatter data:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

See the [VitePress runtime API documentation](https://vitepress.dev/reference/runtime-api#usedata).