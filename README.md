## CurrencyApp

This project is a currency converter application that allows you to convert between Ukrainian Hryvnia (UAH) and other major currencies such as US Dollar (USD) and Euro (EUR). It retrieves the latest exchange rates from a public API to ensure accurate conversions.

### Features

Header with Currency Exchange Rates: The header section displays the current exchange rates for USD to UAH and EUR to UAH. These rates are fetched from a public API and updated regularly.

Conversion Component: The main component of the application is the conversion section. It consists of two input fields and two dropdown selects, allowing you to specify the amount and the currencies to convert.

The first currency input field and select allow you to enter the amount in the original currency and select the currency type (UAH, USD, or EUR).

The second currency input field and select display the converted amount in the target currency and allow you to select the target currency type.

Any changes made to the amount or currency selection in either field will automatically trigger the conversion and update the corresponding values in real-time.

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run npm install to install the required dependencies.
4. Update the API endpoint in the code to fetch the latest exchange rates. Replace the placeholder URL with the actual API endpoint in the CurrencydataService file.
5. Run ng serve to start the development server.
6. Open your web browser and visit http://localhost:4200 to access the Currency Converter application.

### Technologies Used

Angular: A popular JavaScript framework used for building web applications.
HTML: Markup language for creating the structure and content of the web page.
CSS: Stylesheet language for describing the presentation and layout of the web page.
TypeScript: A typed superset of JavaScript used in Angular applications.