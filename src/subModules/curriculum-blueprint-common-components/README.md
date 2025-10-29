# Curriculum Blueprint Common Components

A collection of reusable React components designed for modern web applications. These components provide consistent UI elements across web applications and published Next.js apps, helping to avoid code duplication and maintain design consistency.

## 🚀 Installation

This package is designed to be used as a git submodule in your project.

### Adding as a Submodule

```bash
# Add the submodule to your project
git submodule add <repository-url> src/components/curriculum-blueprint-common-components

# Initialize and update the submodule
git submodule update --init --recursive
```

### Cloning a Project with Submodules

```bash
# Clone with submodules
git clone --recurse-submodules <your-project-url>

# Or if already cloned, initialize submodules
git submodule update --init --recursive
```

## 📋 Prerequisites

This package requires the following dependencies in your main project:

- `@toddle-edu/ds-web`: Design system components
- `@toddle-edu/ds-icons`: Icon library
- `react`: ^16.8.0 or higher
- `react-dom`: ^16.8.0 or higher
- `lodash`: Utility functions

Install dependencies in your main project:

```bash
npm install @toddle-edu/ds-web @toddle-edu/ds-icons react react-dom lodash
```

## 🎯 Available Components

- **TabsHeader**: Responsive header with logo, title, and navigation tabs
- **DepartmentCard**: Card component for displaying department information
- **CourseCard**: Card component for displaying individual items
- **UnitCard**: Card component for displaying units or sections
- **Sidebar**: Navigation sidebar for content organization
- **CourseMapHeader**: Header component for mapping interfaces
- **CourseMapTable**: Table component for displaying mapping data

## 📖 Usage

```jsx
// Import components from the submodule
import {
  TabsHeader,
  DepartmentCard,
  CourseCard,
  UnitCard,
  Sidebar,
  CourseMapHeader,
  CourseMapTable,
} from "./path/to/curriculum-blueprint-common-components/src";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TabsHeader
        title="Company Name"
        backgroundColor="#1a365d"
        tabs={["Overview", "Dashboard", "Reports"]}
        activeTab={activeTab}
        onTabChange={(tab, index) => setActiveTab(index)}
        logo="/path/to/company-logo.png"
      />

      <DepartmentCard title="Technology Department">
        <p>Advanced technology solutions for modern applications</p>
      </DepartmentCard>

      <CourseCard title="React Fundamentals">
        <p>Foundation course in React development</p>
      </CourseCard>
    </div>
  );
}
```

## 🎨 Styling

All components use CSS Modules for consistent styling and include:

- Responsive design principles
- Consistent border radius and padding
- Hover states and transitions
- Support for CSS custom properties

### Theming

Components support CSS custom properties for easy theming:

```css
:root {
  --primary-bg: #1a365d;
  --border-hover: #94a3b8;
}
```

## 🛠️ Development

### Project Structure

```
src/
├── index.js                 # Main export file
├── components/              # All component folders
│   ├── TabsHeader/
│   ├── DepartmentCard/
│   ├── CourseCard/
│   ├── UnitCard/
│   ├── Sidebar/
│   ├── CourseMapHeader/
│   └── CourseMapTable/
└── assets/
    └── school-placeholder.svg
```

### Setup for Development

1. Clone the repository or add as submodule
2. Ensure dependencies are installed in the main project
3. Use Node.js version 20: `nvm use`

### Updating the Submodule

```bash
# Navigate to the submodule directory
cd path/to/curriculum-blueprint-common-components

# Pull latest changes
git pull origin main

# Navigate back to main project
cd ../../../

# Commit the submodule update
git add path/to/curriculum-blueprint-common-components
git commit -m "Update curriculum components submodule"
```

### Dependencies

- **Runtime**: `lodash` for utility functions
- **Required in Main Project**: Toddle design system components, React
- **Configuration**: Node.js 20, legacy peer dependencies enabled

## 📱 Responsive Design

All components are built with mobile-first responsive design principles and adapt to different screen sizes automatically.

## 🤝 Contributing

1. Follow existing component structure and naming conventions
2. Use CSS Modules for styling
3. Ensure accessibility compliance
4. Test across different screen sizes
5. Maintain consistent API patterns

## � Use Case

Perfect for modern web applications and content management systems:

- Corporate websites and portals
- Content planning and mapping tools
- Web application platforms
- Data management systems

## 📄 License

ISC
