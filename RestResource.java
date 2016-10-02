/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package restapi;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Mark_2
 */
@Path("rest")
public class RestResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of RestResource
     */
    public RestResource() {
    }

    /**
     * Retrieves representation of an instance of restapi.RestResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("getJson")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        try {
            System.out.println();
            return readFile("C:\\Users\\Zach\\Desktop\\treeJson.txt");
        } catch (IOException ex) {
            ex.printStackTrace();
            return "ERROR";
        }
    }

    /**
     * PUT method for updating or creating an instance of RestResource
     *
     * @param content representation for the resource
     */
    @POST
    @Path("putJson")
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
        writeFile("C:\\Users\\Zach\\Desktop\\treeJson.txt", content);
    }

//    @Produces(MediaType.APPLICATION_JSON)
    public String test() {
        return "More";
    }

    static void writeFile(String filePath, String content) {
        try (Writer writer = new BufferedWriter(new OutputStreamWriter(
                new FileOutputStream(filePath), "utf-8"))) {
            writer.write(content);
        } catch (IOException ex) {
            Logger.getLogger(RestResource.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    static String readFile(String fileName) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader(fileName));
        try {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();

            while (line != null) {
                sb.append(line);
                sb.append("\n");
                line = br.readLine();
            }
            return sb.toString();
        } finally {
            br.close();
        }
    }

    public static void main(String[] args) {
        RestResource r = new RestResource();
    }
}
