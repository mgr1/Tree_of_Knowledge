/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package restapi;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import static javax.ws.rs.HttpMethod.POST;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
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
            return readFile("C:\\Users\\Mark_2.Mark-PC\\Desktop\\treeJson.txt");
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
    @Path("postJson")
    @Consumes(MediaType.APPLICATION_JSON)
    public void postJson(String content) {
        writeFile(content,"C:\\Users\\Mark_2.Mark-PC\\Desktop\\treeJson.txt");
    }

    @GET
    @Path("test")
//    @Produces(MediaType.APPLICATION_JSON)
    public String test() {
        return "More";
    }

    static void writeFile(String content, String filePath) {
        try {
            File newTextFile = new File(filePath);

            FileWriter fw = new FileWriter(newTextFile);
            fw.write(content);
            fw.close();

        } catch (IOException iox) {
            //do stuff with exception
            iox.printStackTrace();
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
