// src/app/about/page.tsx
import About from '@/components/about/About'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <About />
    </main>
  )
}

// src/components/about/Content.tsx
// 把之前的 About 组件代码移到这里