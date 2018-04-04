# Layout
Build basic layouts using Inkline's built-in layout components. { .lead }

The layout components are used for scaffolding the basic structure of the page:
- `<i-layout>` is the main layout wrapper in which `i-layout-header`, `i-layout-aside`, `i-layout-content`, `i-layout-footer`, or `i-layout` itself can be nested, and can be placed in any parent container.
- `<i-layout-header>` is the header area that can also serve as navigation
- `<i-layout-aside>` is a container for side sections (usually a side nav).
- `<i-layout-content>` is the main content container
- `<i-layout-footer>` is a container for footer elements

## Common layouts

The previewed layouts are styled for documentation purposes only. When using the components, they will only 
provide the correct element positioning without colors and paddings.

Layouts are based on flexbox, so please make sure your browser fully supports it. 

#### Content with header

<i-layout class="-preview">
    <i-layout-header>
        Header
    </i-layout-header>
    <i-layout-content>
        Content
    </i-layout-content>
</i-layout>

~~~html
<i-layout>
    <i-layout-header>
        Header
    </i-layout-header>
    
    <i-layout-content>
        Content
    </i-layout-content>
</i-layout>
~~~
   
#### Content with header and footer

<i-layout class="-preview">
    <i-layout-header>
        Header
    </i-layout-header>
    <i-layout-content>
        Content
    </i-layout-content>
    <i-layout-footer>
        Footer
    </i-layout-footer>
</i-layout>

~~~html
<i-layout>
    <i-layout-header>
        Header
    </i-layout-header>
    
    <i-layout-content>
        Content
    </i-layout-content>
    
    <i-layout-footer>
        Footer
    </i-layout-footer>
</i-layout>
~~~
   
#### Content with left aside

<i-layout class="-preview">
    <i-layout-header>
        Header
    </i-layout-header>
    <i-layout vertical>
        <i-layout-aside>
            <div class="layout-aside-preview-text">Left Aside</div>
        </i-layout-aside>
        <i-layout-content>
            Content
        </i-layout-content>
    </i-layout>
    <i-layout-footer>
        Footer
    </i-layout-footer>
</i-layout>

~~~html
<i-layout>
    <i-layout-header>
        Header
    </i-layout-header>
    
    <i-layout vertical>
        <i-layout-aside>
            Left Aside
        </i-layout-aside>
        
        <i-layout-content>
            Content
        </i-layout-content>
    </i-layout>
    
    <i-layout-footer>
        Footer
    </i-layout-footer>
</i-layout>
~~~   

#### Content with right aside

<i-layout class="-preview">
    <i-layout-header>
        Header
    </i-layout-header>
    <i-layout vertical>
        <i-layout-content>
            Content
        </i-layout-content>
        <i-layout-aside>
            <div class="layout-aside-preview-text">Right Aside</div>
        </i-layout-aside>
    </i-layout>
    <i-layout-footer>
        Footer
    </i-layout-footer>
</i-layout>

~~~html
<i-layout>
    <i-layout-header>
        Header
    </i-layout-header>
    
    <i-layout vertical>
        <i-layout-content>
            Content
        </i-layout-content>
        
        <i-layout-aside>
            Right Aside
        </i-layout-aside>
    </i-layout>
    
    <i-layout-footer>
        Footer
    </i-layout-footer>
</i-layout>
~~~


#### Content with left and right asides

<i-layout class="-preview">
    <i-layout-header>
        Header
    </i-layout-header>
    <i-layout vertical>
        <i-layout-aside>
            <div class="layout-aside-preview-text">Left Aside</div>
        </i-layout-aside>
        <i-layout-content>
            Content
        </i-layout-content>
        <i-layout-aside>
            <div class="layout-aside-preview-text">Right Aside</div>
        </i-layout-aside>
    </i-layout>
    <i-layout-footer>
        Footer
    </i-layout-footer>
</i-layout>

~~~html
<i-layout>
    <i-layout-header>
        Header
    </i-layout-header>
    
    <i-layout vertical>
        <i-layout-aside>
            Left Aside
        </i-layout-aside>
        
        <i-layout-content>
            Content
        </i-layout-content>
        
        <i-layout-aside>
            Right Aside
        </i-layout-aside>
    </i-layout>
    
    <i-layout-footer>
        Footer
    </i-layout-footer>
</i-layout>
~~~


#### Layout with left aside

<i-layout vertical class="-preview">
    <i-layout-aside>
        <div class="layout-aside-preview-text">Left Aside</div>
    </i-layout-aside>
    <i-layout>
        <i-layout-header>
            Header
        </i-layout-header>
        <i-layout-content>
            Content
        </i-layout-content>
        <i-layout-footer>
            Footer
        </i-layout-footer>
    </i-layout>
</i-layout>

~~~html
<i-layout vertical>
    <i-layout-aside>
        Left Aside
    </i-layout-aside>
    
    <i-layout>
        <i-layout-header>
            Header
        </i-layout-header>
        
        <i-layout-content>
            Content
        </i-layout-content>
        
        <i-layout-footer>
            Footer
        </i-layout-footer>
    </i-layout>
</i-layout>
~~~


#### Layout with right aside

<i-layout vertical class="-preview">
    <i-layout>
        <i-layout-header>
            Header
        </i-layout-header>
        <i-layout-content>
            Content
        </i-layout-content>
        <i-layout-footer>
            Footer
        </i-layout-footer>
    </i-layout>
    <i-layout-aside>
        <div class="layout-aside-preview-text">Right Aside</div>
    </i-layout-aside>
</i-layout>

~~~html
<i-layout vertical>
    <i-layout>
        <i-layout-header>
            Header
        </i-layout-header>
        
        <i-layout-content>
            Content
        </i-layout-content>
        
        <i-layout-footer>
            Footer
        </i-layout-footer>
    </i-layout>
    
    <i-layout-aside>
        Right Aside
    </i-layout-aside>
</i-layout>
~~~

#### Layout with left and right asides

<i-layout vertical class="-preview">
    <i-layout-aside>
        <div class="layout-aside-preview-text">Left Aside</div>
    </i-layout-aside>
    <i-layout>
        <i-layout-header>
            Header
        </i-layout-header>
        <i-layout-content>
            Content
        </i-layout-content>
        <i-layout-footer>
            Footer
        </i-layout-footer>
    </i-layout>
    <i-layout-aside>
        <div class="layout-aside-preview-text">Right Aside</div>
    </i-layout-aside>
</i-layout>

~~~html
<i-layout vertical>
    <i-layout-aside>
        Left Aside
    </i-layout-aside>
    
    <i-layout>
        <i-layout-header>
            Header
        </i-layout-header>
        
        <i-layout-content>
            Content
        </i-layout-content>
        
        <i-layout-footer>
            Footer
        </i-layout-footer>
    </i-layout>
    
    <i-layout-aside>
        Right Aside
    </i-layout-aside>
</i-layout>
~~~
