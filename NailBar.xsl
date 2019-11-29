<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <!-- this XSL stylesheet matches the <JavacoTea> tag in an associated XML
	file and replaces it with the HTML contents of the template. -->
    <xsl:template match="/">
        <html>
            <head>
                <title>Nail Bar</title>
                <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
                <link href="NailBarStyles.css" rel="stylesheet" type="text/css" />
                <!-- Include the JavaScript code for processing the XML data -->
                <script src="NailBarCode.js"></script>
                <script>
			        window.addEventListener("load", function() {
			            document.forms[0].txtBillAmt.value = calculateBill('menuTable');
			            document.querySelector("#calcBill").addEventListener("click", function() {
			                document.forms[0].txtBillAmt.value = calculateBill('menuTable');
			            });
			            document.querySelector("#showVeg").addEventListener("click", function() {
			                highlightVegetarian('menuTable', this.checked);
			            });
			        });
			    </script>
            </head>
            <body>
                <h2>
                    <img src="nails_logo.gif" alt="Nails Logo" width="58" height="100" />Welcome to Nail Bar</h2>
                <p>Select your service type from the menu below. To calculate the amount of the bill, click the Calculate Bill button. Check the "Highlight" box to highlight</p>
                <table id="menuTable" border="1" class="indent">
                    <thead>
                        <tr>
                            <th colspan="3">Nail Bar Menu</th>
                        </tr>
                        <tr>
                            <th>Select</th>
                            <th>Item</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/menu/service_type">
                            <tr>
                                <td colspan="3">
                                    <xsl:value-of select="@item" />
                                </td>
                            </tr>
                            <xsl:for-each select="service_type">
                                <td align="center">
                                        <input name="item0" type="checkbox" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="item" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="price" />
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table>
                <form class="indent">
                    <p>
                        <input type="button" name="btnCalcBill" value="Calculate Bill" id="calcBill" />
				Total: €
				<input type="text" name="txtBillAmt" /><input type="checkbox" name="cbOpts" value="isVeg" id="showVeg" /><label for="showVeg">Highlight</label></p>
                </form>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>