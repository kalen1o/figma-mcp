# Figma MCP Project

A React + TypeScript project for implementing Figma designs using Model Context Protocol (MCP) integration with Cursor.

## Prerequisites

- Cursor IDE
- Figma Desktop App (latest version) OR Figma Web account
- A Figma Design file to work with

## Step-by-Step: Figma MCP Connection to Cursor

Figma provides two methods to connect MCP: **Desktop App** (local server) and **Web App** (remote server). Choose the method that works best for you.

### Method 1: Figma Desktop App (Local Server)

#### Step 1: Set Up Figma Desktop MCP Server

1. Ensure you have the latest version of the Figma desktop application installed
2. Open a Figma Design file in the Figma Desktop App
3. Switch to **Dev Mode** by clicking the toggle in the toolbar
4. In the right sidebar, enable the **MCP server**
5. A confirmation message will appear
6. Copy the server URL (typically `http://127.0.0.1:3845/mcp`)

#### Step 2: Configure Cursor MCP Settings

1. Open Cursor IDE
2. Navigate to **Settings** → **MCP** tab (or **Features** → **Model Context Protocol**)
3. Click **"+ Add New MCP Server"**
4. Enter the following configuration:

```json
{
  "mcpServers": {
    "figma": {
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

5. Save the configuration

#### Step 3: Connect and Authenticate

1. After adding the server, it will appear in your MCP servers list in Cursor
2. Click **"Connect"** next to the Figma MCP server
3. Follow the prompts to allow access
4. Once connected, the MCP server is ready to use

### Method 2: Figma Web App (Remote Server)

#### Step 1: Set Up Figma Remote MCP Server

1. Open a Figma Design file in your browser (Figma Web)
2. With **no objects selected**, switch to **Dev Mode**
3. In the right inspect panel, click **"Set up an MCP client"** to access configuration details
4. Note the remote MCP server URL: `https://mcp.figma.com/mcp`

#### Step 2: Configure Cursor MCP Settings

1. Open Cursor IDE
2. Navigate to **Settings** → **MCP** tab (or **Features** → **Model Context Protocol**)
3. Click **"+ Add New MCP Server"**
4. Enter the following configuration:

```json
{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

5. Save the configuration

#### Step 3: Connect and Authenticate

1. After adding the server, it will appear in your MCP servers list in Cursor
2. Click **"Connect"** next to the Figma MCP server
3. Follow the authentication prompts to allow access
4. Once connected, the MCP server is ready to use

### Step 4: Verify Connection

1. Open a chat in Cursor
2. Try asking: "List my Figma files" or "What Figma resources are available?"
3. If connected, you should see Figma-related resources and tools available
4. You can now reference your open Figma file directly in Cursor

### Troubleshooting

**MCP server not appearing in Figma:**
- Ensure you're using the latest version of Figma Desktop App
- Make sure you're in Dev Mode (toggle in toolbar)
- Try closing and reopening the Figma file

**Connection issues in Cursor:**
- Verify the server URL is correct:
  - Desktop: `http://127.0.0.1:3845/mcp`
  - Web: `https://mcp.figma.com/mcp`
- Restart Cursor after configuration changes
- Check that Figma Desktop App is running (for local server method)
- Check network connectivity (for remote server method)

**Authentication errors:**
- Follow the authentication prompts carefully
- Ensure you grant necessary permissions
- Try disconnecting and reconnecting the MCP server

**For detailed troubleshooting:**
- [Figma MCP Desktop Setup Guide](https://help.figma.com/hc/en-us/articles/35281186390679-Figma-MCP-collection-How-to-setup-the-Figma-desktop-MCP-server)
- [Figma MCP Remote Setup Guide](https://help.figma.com/hc/en-us/articles/35281350665623-Figma-MCP-collection-How-to-set-up-the-Figma-remote-MCP-server)

## Using Figma MCP in Cursor

Once connected, the Figma MCP server enables you to:

- **Generate code from Figma designs** - Convert design elements directly into code
- **Extract design context** - Get detailed information about components, styles, and layouts
- **Access design specifications** - Retrieve spacing, colors, typography, and other design tokens
- **Work with your open Figma file** - The MCP server connects to the file you have open in Figma
- **Analyze design structure** - Understand component hierarchy and relationships

Simply reference your Figma design in Cursor chat, and the MCP server will provide the necessary design context to help implement your designs.

## Prompt Template: Implement Design Section

Use this prompt template when asking Cursor to implement a design section:

```
I need to implement a design section from Figma. Please:

1. Load the Figma design from file: [FILE_KEY or URL]
2. Analyze the [SECTION_NAME] section (e.g., "Header", "Hero Section", "Product Card")
3. Extract the following design specifications:
   - Layout structure and spacing
   - Colors and typography
   - Component hierarchy
   - Responsive breakpoints
   - Interactive states (hover, active, disabled)
   - Assets and images needed

4. Implement the section as a React component with:
   - TypeScript types
   - Responsive design (mobile-first)
   - Proper accessibility attributes
   - Clean, maintainable code structure
   - Following existing project patterns

5. Create the component file at: [TARGET_PATH]
6. Integrate it into the main app if needed

Please start by loading the design and showing me the extracted specifications before implementation.
```

### Example Usage

```
I need to implement a design section from Figma. Please:

1. Load the Figma design from file: ABC123xyz
2. Analyze the "Header" section
3. Extract design specifications (layout, colors, typography, spacing, component hierarchy)
4. Implement as a React component with TypeScript, mobile-first responsive design, and accessibility
5. Create the component at: src/components/Header.tsx
6. Integrate it into App.tsx

Please show me the extracted specifications first.
```

## Project Setup

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Ant Design 6** for UI components
- **Tailwind CSS** for styling

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Homepage.tsx
│   └── Drawer.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## License

MIT
