# Layout
Build basic layouts using Inkline's built-in layout components. { .lead }

The layout components are used for scaffolding the basic structure of the page:
- `<layout>` is the main layout wrapper in which `layout-header`, `layout-aside`, `layout-content`, `layout-footer`, or `layout` itself can be nested, and can be placed in any parent container.
- `<layout-header>` is the header area that can also serve as navigation
- `<layout-aside>` is a container for side sections (usually a side nav).
- `<layout-content>` is the main content container
- `<layout-footer>` is a container for footer elements

## Common layouts

The previewed layouts are styled for documentation purposes only. When using the components, they will only 
provide the correct element positioning without colors and paddings.

Layouts are based on flexbox, so please make sure your browser fully supports it. 

#### Content with header

<layout class="-preview">
    <layout-header>
        Header
    </layout-header>
    <layout-content>
        Content
    </layout-content>
</layout>

~~~html
<layout>
    <layout-header>
        Header
    </layout-header>
    
    <layout-content>
        Content
    </layout-content>
</layout>
~~~
   
#### Content with header and footer

<layout class="-preview">
    <layout-header>
        Header
    </layout-header>
    <layout-content>
        Content
    </layout-content>
    <layout-footer>
        Footer
    </layout-footer>
</layout>

~~~html
<layout>
    <layout-header>
        Header
    </layout-header>
    
    <layout-content>
        Content
    </layout-content>
    
    <layout-footer>
        Footer
    </layout-footer>
</layout>
~~~
   
#### Content with left aside

<layout class="-preview">
    <layout-header>
        Header
    </layout-header>
    <layout vertical>
        <layout-aside>
            <div class="layout-aside-preview-text">Left Aside</div>
        </layout-aside>
        <layout-content>
            Content
        </layout-content>
    </layout>
    <layout-footer>
        Footer
    </layout-footer>
</layout>

~~~html
<layout>
    <layout-header>
        Header
    </layout-header>
    
    <layout vertical>
        <layout-aside>
            Left Aside
        </layout-aside>
        
        <layout-content>
            Content
        </layout-content>
    </layout>
    
    <layout-footer>
        Footer
    </layout-footer>
</layout>
~~~   

#### Content with right aside

<layout class="-preview">
    <layout-header>
        Header
    </layout-header>
    <layout vertical>
        <layout-content>
            Content
        </layout-content>
        <layout-aside>
            <div class="layout-aside-preview-text">Right Aside</div>
        </layout-aside>
    </layout>
    <layout-footer>
        Footer
    </layout-footer>
</layout>

~~~html
<layout>
    <layout-header>
        Header
    </layout-header>
    
    <layout vertical>
        <layout-content>
            Content
        </layout-content>
        
        <layout-aside>
            Right Aside
        </layout-aside>
    </layout>
    
    <layout-footer>
        Footer
    </layout-footer>
</layout>
~~~


#### Content with left and right asides

<layout class="-preview">
    <layout-header>
        Header
    </layout-header>
    <layout vertical>
        <layout-aside>
            <div class="layout-aside-preview-text">Left Aside</div>
        </layout-aside>
        <layout-content>
            Content
        </layout-content>
        <layout-aside>
            <div class="layout-aside-preview-text">Right Aside</div>
        </layout-aside>
    </layout>
    <layout-footer>
        Footer
    </layout-footer>
</layout>

~~~html
<layout>
    <layout-header>
        Header
    </layout-header>
    
    <layout vertical>
        <layout-aside>
            Left Aside
        </layout-aside>
        
        <layout-content>
            Content
        </layout-content>
        
        <layout-aside>
            Right Aside
        </layout-aside>
    </layout>
    
    <layout-footer>
        Footer
    </layout-footer>
</layout>
~~~


#### Layout with left aside

<layout vertical class="-preview">
    <layout-aside>
        <div class="layout-aside-preview-text">Left Aside</div>
    </layout-aside>
    <layout>
        <layout-header>
            Header
        </layout-header>
        <layout-content>
            Content
        </layout-content>
        <layout-footer>
            Footer
        </layout-footer>
    </layout>
</layout>

~~~html
<layout vertical>
    <layout-aside>
        Left Aside
    </layout-aside>
    
    <layout>
        <layout-header>
            Header
        </layout-header>
        
        <layout-content>
            Content
        </layout-content>
        
        <layout-footer>
            Footer
        </layout-footer>
    </layout>
</layout>
~~~


#### Layout with right aside

<layout vertical class="-preview">
    <layout>
        <layout-header>
            Header
        </layout-header>
        <layout-content>
            Content
        </layout-content>
        <layout-footer>
            Footer
        </layout-footer>
    </layout>
    <layout-aside>
        <div class="layout-aside-preview-text">Right Aside</div>
    </layout-aside>
</layout>

~~~html
<layout vertical>
    <layout>
        <layout-header>
            Header
        </layout-header>
        
        <layout-content>
            Content
        </layout-content>
        
        <layout-footer>
            Footer
        </layout-footer>
    </layout>
    
    <layout-aside>
        Right Aside
    </layout-aside>
</layout>
~~~

#### Layout with left and right asides

<layout vertical class="-preview">
    <layout-aside>
        <div class="layout-aside-preview-text">Left Aside</div>
    </layout-aside>
    <layout>
        <layout-header>
            Header
        </layout-header>
        <layout-content>
            Content
        </layout-content>
        <layout-footer>
            Footer
        </layout-footer>
    </layout>
    <layout-aside>
        <div class="layout-aside-preview-text">Right Aside</div>
    </layout-aside>
</layout>

~~~html
<layout vertical>
    <layout-aside>
        Left Aside
    </layout-aside>
    
    <layout>
        <layout-header>
            Header
        </layout-header>
        
        <layout-content>
            Content
        </layout-content>
        
        <layout-footer>
            Footer
        </layout-footer>
    </layout>
    
    <layout-aside>
        Right Aside
    </layout-aside>
</layout>
~~~
