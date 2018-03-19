# Layout
Build basic layouts using Inkline's built-in layout components. { .lead }

The layout components are used for scaffolding the basic structure of the page:
- `<Layout>` is the main layout wrapper in which `layout-header`, `layout-aside`, `layout-content`, `layout-footer`, or `layout` itself can be nested, and can be placed in any parent container.
- `<LayoutHeader>` is the header area that can also serve as navigation
- `<LayoutAside>` is a container for side sections (usually a side nav).
- `<LayoutContent>` is the main content container
- `<LayoutFooter>` is a container for footer elements

## Common layouts

The previewed layouts are styled for documentation purposes only. When using the components, they will only 
provide the correct element positioning without colors and paddings.

Layouts are based on flexbox, so please make sure your browser fully supports it. 

#### Content with header

<Layout class="-preview">
    <LayoutHeader>
        Header
    </LayoutHeader>
    <LayoutContent>
        Content
    </LayoutContent>
</Layout>

~~~html
<Layout>
    <LayoutHeader>
        Header
    </LayoutHeader>
    
    <LayoutContent>
        Content
    </LayoutContent>
</Layout>
~~~
   
#### Content with header and footer

<Layout class="-preview">
    <LayoutHeader>
        Header
    </LayoutHeader>
    <LayoutContent>
        Content
    </LayoutContent>
    <LayoutFooter>
        Footer
    </LayoutFooter>
</Layout>

~~~html
<Layout>
    <LayoutHeader>
        Header
    </LayoutHeader>
    
    <LayoutContent>
        Content
    </LayoutContent>
    
    <LayoutFooter>
        Footer
    </LayoutFooter>
</Layout>
~~~
   
#### Content with left aside

<Layout class="-preview">
    <LayoutHeader>
        Header
    </LayoutHeader>
    <Layout vertical>
        <LayoutAside>
            <div class="layout-aside-preview-text">Left Aside</div>
        </LayoutAside>
        <LayoutContent>
            Content
        </LayoutContent>
    </Layout>
    <LayoutFooter>
        Footer
    </LayoutFooter>
</Layout>

~~~html
<Layout>
    <LayoutHeader>
        Header
    </LayoutHeader>
    
    <Layout vertical>
        <LayoutAside>
            Left Aside
        </LayoutAside>
        
        <LayoutContent>
            Content
        </LayoutContent>
    </Layout>
    
    <LayoutFooter>
        Footer
    </LayoutFooter>
</Layout>
~~~   

#### Content with right aside

<Layout class="-preview">
    <LayoutHeader>
        Header
    </LayoutHeader>
    <Layout vertical>
        <LayoutContent>
            Content
        </LayoutContent>
        <LayoutAside>
            <div class="layout-aside-preview-text">Right Aside</div>
        </LayoutAside>
    </Layout>
    <LayoutFooter>
        Footer
    </LayoutFooter>
</Layout>

~~~html
<Layout>
    <LayoutHeader>
        Header
    </LayoutHeader>
    
    <Layout vertical>
        <LayoutContent>
            Content
        </LayoutContent>
        
        <LayoutAside>
            Right Aside
        </LayoutAside>
    </Layout>
    
    <LayoutFooter>
        Footer
    </LayoutFooter>
</Layout>
~~~


#### Content with left and right asides

<Layout class="-preview">
    <LayoutHeader>
        Header
    </LayoutHeader>
    <Layout vertical>
        <LayoutAside>
            <div class="layout-aside-preview-text">Left Aside</div>
        </LayoutAside>
        <LayoutContent>
            Content
        </LayoutContent>
        <LayoutAside>
            <div class="layout-aside-preview-text">Right Aside</div>
        </LayoutAside>
    </Layout>
    <LayoutFooter>
        Footer
    </LayoutFooter>
</Layout>

~~~html
<Layout>
    <LayoutHeader>
        Header
    </LayoutHeader>
    
    <Layout vertical>
        <LayoutAside>
            Left Aside
        </LayoutAside>
        
        <LayoutContent>
            Content
        </LayoutContent>
        
        <LayoutAside>
            Right Aside
        </LayoutAside>
    </Layout>
    
    <LayoutFooter>
        Footer
    </LayoutFooter>
</Layout>
~~~


#### Layout with left aside

<Layout vertical class="-preview">
    <LayoutAside>
        <div class="layout-aside-preview-text">Left Aside</div>
    </LayoutAside>
    <Layout>
        <LayoutHeader>
            Header
        </LayoutHeader>
        <LayoutContent>
            Content
        </LayoutContent>
        <LayoutFooter>
            Footer
        </LayoutFooter>
    </Layout>
</Layout>

~~~html
<Layout vertical>
    <LayoutAside>
        Left Aside
    </LayoutAside>
    
    <Layout>
        <LayoutHeader>
            Header
        </LayoutHeader>
        
        <LayoutContent>
            Content
        </LayoutContent>
        
        <LayoutFooter>
            Footer
        </LayoutFooter>
    </Layout>
</Layout>
~~~


#### Layout with right aside

<Layout vertical class="-preview">
    <Layout>
        <LayoutHeader>
            Header
        </LayoutHeader>
        <LayoutContent>
            Content
        </LayoutContent>
        <LayoutFooter>
            Footer
        </LayoutFooter>
    </Layout>
    <LayoutAside>
        <div class="layout-aside-preview-text">Right Aside</div>
    </LayoutAside>
</Layout>

~~~html
<Layout vertical>
    <Layout>
        <LayoutHeader>
            Header
        </LayoutHeader>
        
        <LayoutContent>
            Content
        </LayoutContent>
        
        <LayoutFooter>
            Footer
        </LayoutFooter>
    </Layout>
    
    <LayoutAside>
        Right Aside
    </LayoutAside>
</Layout>
~~~

#### Layout with left and right asides

<Layout vertical class="-preview">
    <LayoutAside>
        <div class="layout-aside-preview-text">Left Aside</div>
    </LayoutAside>
    <Layout>
        <LayoutHeader>
            Header
        </LayoutHeader>
        <LayoutContent>
            Content
        </LayoutContent>
        <LayoutFooter>
            Footer
        </LayoutFooter>
    </Layout>
    <LayoutAside>
        <div class="layout-aside-preview-text">Right Aside</div>
    </LayoutAside>
</Layout>

~~~html
<Layout vertical>
    <LayoutAside>
        Left Aside
    </LayoutAside>
    
    <Layout>
        <LayoutHeader>
            Header
        </LayoutHeader>
        
        <LayoutContent>
            Content
        </LayoutContent>
        
        <LayoutFooter>
            Footer
        </LayoutFooter>
    </Layout>
    
    <LayoutAside>
        Right Aside
    </LayoutAside>
</Layout>
~~~
